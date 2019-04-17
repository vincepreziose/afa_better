import React, { Component } from 'react';
import { connect } from 'react-redux';
import L from 'leaflet';
import 'leaflet.snogylop';
import geoJson from '../../data/california';
import { getLabs } from '../../actions'
import styles from './LabMap.module.css';

class LabMap extends Component {

  componentDidMount() {
    this.props.getLabs();
    this.map = L.map('map', {
      minZoom: 6,
      center: [36.778261, -119.4179324],
      zoom: 6,
      layers: [
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          id: 'mapbox.streets'
        }),
        L.geoJson(geoJson, {
          invert: true
        })
      ]
    })
  }

  render() {
    return (
      <div id="map" className={styles.LabMapDims}>
        { console.log(this.props) }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  labs: state.map.labs
});

const mapDispatchToProps = dispatch => ({
  getLabs: () => dispatch(getLabs())
});

export default connect(mapStateToProps, mapDispatchToProps)(LabMap);
