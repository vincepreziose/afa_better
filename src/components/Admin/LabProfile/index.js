import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminSidebar from '../AdminSidebar';
import AdminHeader from '../AdminHeader';
import {getLabs} from "../../../actions";
import styles from './LabProfile.module.css';

class LabProfile extends Component {
  state = {
    labId: null
  }

  componentDidMount() {
    let labId = parseInt(this.props.match.params.id);
    this.setState({ labId });
    if (this.props.labs.length === 0) {
      this.props.initializeLabs();
    }
  }

  renderSpinner() {
    console.log('...Loading')
  }

  renderReportData(data) {
    let rows = [];
    data.forEach((row, i) => {
      rows.push(
        <tr key={i}>
          <td>{row.a}</td>
          <td>{row.b}</td>
          <td>{row.c}</td>
          <td>{row.d}</td>
          <td>{row.e}</td>
          <td>{row.notes}</td>
        </tr>
      )
    });

    return (
      rows
    )
  }

  renderLab() {
    const arg = this.state;
    let lab = this.props.labs.find((lab) => {
      return lab.id === arg.labId
    }, this.state);

    if (lab) {
      return (
        <div>
          <hr/>
          <div className={styles.LabInfoHeader}>
            <div className={styles.Row}>
              <div className={styles.Column}>
                <div className={styles.ColumnOne}>
                  <h5 className={styles.BottomPush}>Name: <br /><span className={styles.LabInfoText}>{lab.name}</span></h5>
                  <h5 className={styles.BottomPush}>Address1: <br/> <span className={styles.LabInfoText}>{lab.address1}</span></h5>
                  <h5>Address2: <br/><span className={styles.LabInfoText}>{lab.address2}</span></h5>
                </div>
              </div>
              <div className={styles.Column}>
                <div className={styles.ColumnTwo}>
                  <h5 className={styles.BottomPush}>City: <br/><span className={styles.LabInfoText}>{lab.city}</span></h5>
                  <h5>Certificate Number: <br/><span className={styles.LabInfoText}>{lab.certificateNum}</span></h5>
                </div>
              </div>
            </div>
          </div>

          <hr/>
          <h4 className={styles.ReportDataHeader}>Report Data</h4>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
              <tr>
                <th>A</th>
                <th>B</th>
                <th>C</th>
                <th>D</th>
                <th>E</th>
                <th>Notes</th>
              </tr>
              </thead>
              <tbody>
              { this.renderReportData(lab.reportData) }
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <AdminSidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">

            <AdminHeader
              headerText="Lab Profile"
            />

            { this.props.labs.length > 0 ? this.renderLab() : this.renderSpinner() }

          </main>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  labs: state.map.labs
});

const mapDispatchToProps = dispatch => ({
  initializeLabs: () => dispatch(getLabs())
});

export default connect(mapStateToProps, mapDispatchToProps)(LabProfile);
