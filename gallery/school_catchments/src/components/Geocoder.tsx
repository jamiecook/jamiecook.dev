import React, { Component } from 'react'
import * as PropTypes from 'prop-types';
import  mapboxgl  from 'mapbox-gl'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

var accessToken = 'pk.eyJ1IjoiamFtaWVjb29rIiwiYSI6ImNpcjhrOHpxMjAwd3BnY20zdWJ0MWQxZGcifQ.Bv4HcBin6hloqDai0WEgyA'

export interface GeocoderProps { map: mapboxgl.Map }

class Geocoder extends Component<GeocoderProps, {}> {
  map: any

  componentDidMount() {
    console.log("JAMIE")
  }

  render() {
    return (
      <div id='geocoder' className='absolute top left ml12 mt12 pt12 pb12 px12 shadow-darken5 round z1 flex-parent'>
        <div className='absolute flex-parent flex-parent--center-cross flex-parent--center-main w36 h36'>
          <svg className='icon'>
            <use xlinkHref='#icon-earch' />
          </svg>
        </div>
        <input type='text'
               id='address_search'
               name='address_search'
               placeholder='Search for an address'
               className='input border-r--0 pl36 round bg-white wmin360'
        />
      </div>
    )
  }
}

export default Geocoder;
