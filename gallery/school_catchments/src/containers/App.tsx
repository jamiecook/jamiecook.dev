import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import mapboxgl from 'mapbox-gl'
// import _ from "underscore";

import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/assembly/dist/assembly.css';
// import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

import Geocoder from '../components/Geocoder'
import { Clock } from '../components/Clock'
import { Attribution } from '../components/Attribution'
import { Popup } from '../components/Popup'
import { LoadingOverlay } from '../components/LoadingOverlay'
import { style } from '../style'
import qldCatchments from '../qld_catchments.json'

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
      minZoom: 4.5,
      attributionControl: false
    }).addControl(new mapboxgl.AttributionControl({
      compact: true,
      customAttribution: attribution.map(ReactDOMServer.renderToString).join(' ')
    }));

    var geocoder = new Geocoder({map: this.map});

    this.map.on('load', () => {

      this.map.addSource('qld-catchments-source', {
        type: 'geojson',
        data: qldCatchments
      });

      this.map.addLayer({
        id: 'qld-catchments-layer',
        type: 'fill',
        source: 'qld-catchments-source',
        paint: {
          "fill-color": "#ff7e87",
          "fill-outline-color": "#95121a",
          "fill-opacity": 0.001
        }
      }, 'settlement-label');

      this.map.addLayer({
        id: 'qld-catchments-hl-layer',
        type: 'fill',
        source: 'qld-catchments-source',
        paint: {
          "fill-color": "#ff7e87",
          "fill-outline-color": "#95121a",
          "fill-opacity": 1.0
        },
      }, 'settlement-label');

      this.map.addLayer({
        id: 'qld-catchments-line-layer',
        type: 'line',
        source: 'qld-catchments-source',
        paint: {
          "line-color": "#95121a",
          "line-width": 1,
          "line-opacity": 0.5,
          "line-dasharray": [2,2]
        }
      }, 'settlement-label');

      this.map.addLayer({
        id: 'qld-catchments-hl-line-layer',
        type: 'line',
        source: 'qld-catchments-source',
        paint: {
          "line-color": "#95121a",
          "line-width": 3,
          "line-opacity": 1.0
        }
      }, 'settlement-label');

      this.map.setFilter('qld-catchments-hl-layer', ['==', 'id', 1]);
      this.map.setFilter('qld-catchments-hl-line-layer', ['==', 'id', 1]);


      // 149,18,26, -> 255, 126, 135
      this.setState({ loading: false });

      console.log("Setting mouse");
      this.map.on('click', 'qld-catchments-layer', (e: mapboxgl.EventData) => this.updatePopup(e));
      this.map.on('mouseenter', 'qld-catchments-layer', (e: mapboxgl.EventData) => console.log(e.features[0]));
      console.log("Setting mouse");

    });
  }


  setMouseHandlers() {
    this.map.on('click', 'qld-catchments', (e: mapboxgl.EventData) => console.log(e.features[0]));
    // this.map.on('mouseleave', 'travel_zones', (_: mapboxgl.EventData) => this.popup.remove());
  }

  updatePopup(e: mapboxgl.EventData) {
    console.log(e);
    const feature = e.features[0];
    const element = document.createElement('div')
    ReactDOM.render(
      <Popup
        school_name="Somewhereville State School"
        num_students={1000}
        link='http://somewhere.qld.edu.gov.au'
      />,
      element);
    this.popup.setLngLat(e.lngLat).setDOMContent(element).addTo(this.map);
  }

  updateFeatureState(selectedData: { [key: string]: number }) {
    console.log("updateFeatureState");

  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <Clock />
        <LoadingOverlay visible={loading} />
        <Geocoder map={this.map} />
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
      </div>
    );
  }
}
