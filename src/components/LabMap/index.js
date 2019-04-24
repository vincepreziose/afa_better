import React, { Component } from 'react';
import { connect } from 'react-redux';
import L from 'leaflet';
import 'leaflet.snogylop';
import geoJson from '../../data/california';
import { getLabs, setMap } from '../../actions'
import styles from './LabMap.module.css';

class LabMap extends Component {
  componentDidMount() {
    this.initializeMap();
    this.props.initializeLabs();
  }

  componentDidUpdate() {
    // console.log('componentDidUpdate')
  }

  initializeMap() {
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
    });
    this.props.setMap(this.map);
  }

  renderMapMarkers() {
    this.props.labs.forEach(lab => {
      const coordinates = {
        lat: lab.mapMarker.lat,
        lng: lab.mapMarker.lng
      }

      let reportData = `<div class="row">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th class="firstColumn" scope="col">A</th>
                  <th scope="col">B</th>
                  <th scope="col">C</th>
                  <th scope="col">D</th>
                  <th scope="col">E</th>
                  <th scope="col">Notes</th>
                </tr>
              </thead>
              <tbody>`;

      lab.reportData.forEach(data => {
        data.a = !data.a ? '' : data.a;
        data.b = !data.b ? '' : data.b;
        data.c = !data.c ? '' : data.c;
        data.d = !data.d ? '' : data.d;
        data.e = !data.e ? '' : data.e;
        data.notes = !data.notes ? '' : data.notes;

        reportData += `<tr>
                  <td class="firstColumn">${data.a}</td>
                  <td>${data.b}</td>
                  <td>${data.c}</td>
                  <td>${data.d}</td>
                  <td>${data.e}</td>
                  <td>${data.notes}</td>
                </tr>`;
      });

      reportData += `</tbody>
                </table>
              </div>
            </div>`;

      const marker = L.marker([coordinates.lat, coordinates.lng]).addTo(this.props.mapObj);

      let labInfoTable = `<div class="container labInfo">
            <div class="labHeaderInfo">
                <div class="labName">${lab.name}</div>
                <div class="labAddress">${lab.address1}</div>`;

      if (lab.address2 !== "") {
        labInfoTable += `<div class="labAddress">${lab.address2}</div>`;
      }

      labInfoTable += `<div class="labCity">${lab.city}, CA</div>
            <div class="labCert">Certificate Number(s): ${lab.certificateNum}</div>
          </div>
            ${reportData}
         </div>`;

      marker.bindPopup(labInfoTable);
    });
  }

  renderSpinner() {
    console.log('...Loading');
    if (this.props.errorMessage !== '') {
      // add an alert here
      console.log('Houston, we have a problem!');
      console.log(this.props.errorMessage)
    } else {
      // add spinner jsx here
    }
  }

  render() {
    if (Object.entries(this.props.mapObj).length === 0 && this.props.mapObj.constructor === Object) {
      return (
        <div id="map" className={styles.LabMapDims}>
          { this.renderSpinner() }
        </div>
      )
    } else {
      return (
        <div id="map" className={styles.LabMapDims}>
          { this.props.labs.length > 0 ? this.renderMapMarkers() : this.renderSpinner() }
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  mapObj: state.map.mapObj,
  labs: state.map.labs,
  errorMessage: state.map.errorMessage
});

const mapDispatchToProps = dispatch => ({
  setMap: (map) => dispatch(setMap(map)),
  initializeLabs: () => dispatch(getLabs())
});

export default connect(mapStateToProps, mapDispatchToProps)(LabMap);
