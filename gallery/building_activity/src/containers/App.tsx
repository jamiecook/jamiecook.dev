import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import mapboxgl from 'mapbox-gl'
// import _ from "underscore";

import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/assembly/dist/assembly.css';

import { Attribution } from '../components/Attribution'
import { LoadingOverlay } from '../components/LoadingOverlay'
import { style } from '../style'
import buildingFootprints from '../building_footprints.json'

type State =
  {
    loading: boolean
  }

// const homeUrl: string = "https://jamiecook.dev/"

export class App extends React.Component {
  map: any;
  mapContainer: Element | null;
  state: State;
  popup: mapboxgl.Popup;

  constructor(props: {}) {
    super(props);
    this.state = {
      loading: true
    };
    this.map = null;
    this.mapContainer = null;
    this.popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false });
  }

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamFtaWVjb29rIiwiYSI6ImNpcjhrOHpxMjAwd3BnY20zdWJ0MWQxZGcifQ.Bv4HcBin6hloqDai0WEgyA'
    if (this.mapContainer !== null) {
      this.setupMap(this.mapContainer);
    }
  }

  componentDidUpdate(_: {}, __: State) {
  }

  setupMap(mapContainer: Element) {
    const attribution = [
      <Attribution name="City of Melbourne" url="https://data.melbourne.vic.gov.au/Property/Development-Activity-Model-Footprints/def8-4wbt" />
    ];
    this.map = new mapboxgl.Map({
      container: mapContainer,
      style: style,
      maxZoom: 18,
      minZoom: 8.5,
      attributionControl: false
    }).addControl(new mapboxgl.AttributionControl({
      compact: true,
      customAttribution: attribution.map(ReactDOMServer.renderToString).join(' ')
    }));

    this.map.on('load', () => {

      this.map.addSource('building_footprints', {
        type: 'geojson',
        data: buildingFootprints
      });

      this.map.addLayer({
        id: 'building_footprints',
        type: 'fill-extrusion',
        source: 'building_footprints',
        paint: {
          'fill-extrusion-height': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['to-number', ['get', 'bldhgt_ahd']]
          ],
          'fill-extrusion-base': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['to-number', ['get', 'base_ahd']]
          ],
          'fill-extrusion-color': ['match', ['get', 'status'],
                                   'APPLIED', '#a2d7fa',
                                   'APPROVED', '#a2faa7',
                                   'COMPLETED', '#b8b8b8',
                                   'UNDER CONSTRUCTION', '#f2f196',
                                   'red']
        }
      }, 'settlement-label');

      this.map.addLayer({
          'id': '3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 12,
          'paint': {
            'fill-extrusion-color': '#aaa',

            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height']
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.35
          }
        }
      );

      this.setState({ loading: false });

    });
  }


  setMouseHandlers() {
    this.map.on('click', 'building_footprints', (e: mapboxgl.EventData) => console.log(e.features[0]));
    // this.map.on('mouseleave', 'travel_zones', (_: mapboxgl.EventData) => this.popup.remove());
  }

  updatePopup(e: mapboxgl.EventData) {
    console.log(e);
  }

  updateFeatureState(selectedData: { [key: string]: number }) {
    console.log("updateFeatureState");
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <LoadingOverlay visible={loading} />
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
      </div>
    );
  }
}
