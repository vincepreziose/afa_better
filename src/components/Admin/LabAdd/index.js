import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminSidebar from '../AdminSidebar';
import AdminHeader from '../AdminHeader';
import {getLabs} from "../../../actions";
import styles from './LabAdd.module.css';

class LabAdd extends Component {

  state = {
    rows: []
  }

  renderReportData() {
    let reportRecord = [];
    this.state.rows.forEach((row, i) => {
      reportRecord.push(
        <tr key={i}>
          <td>{row.a}</td>
          <td>{row.b}</td>
          <td>{row.c}</td>
          <td>{row.d}</td>
          <td>{row.e}</td>
          <td>{row.notes}</td>
        </tr>
      );
    });

    reportRecord.push(
      <tr
        key={0}
        style={{
          backgroundColor: 'white'
        }}
      >
        <td style={{ paddingLeft: '0' }}><input style={{ width: '100%'}} type="text"/></td>
        <td><input style={{ width: '100%'}}  type="text"/></td>
        <td><input style={{ width: '100%'}}  type="text"/></td>
        <td><input style={{ width: '100%'}}  type="text"/></td>
        <td><input style={{ width: '100%'}}  type="text"/></td>
        <td style={{ paddingRight: '0' }}><input style={{ width: '100%'}}  type="text"/></td>
      </tr>
    );

    return (
      reportRecord
    )
  }

  renderLabInfoHeader() {
    return (
      <div className={styles.LabInfoHeader}>
        <div className={styles.Row}>
          <div className={styles.Column}>
            <div className={styles.ColumnOne}>
              <h5 className={styles.BottomPush}>Name: <br /><span className={styles.LabInfoText}><input className="form-control" type="text"/></span></h5>
              <h5 className={styles.BottomPush}>Address1: <br/> <span className={styles.LabInfoText}><input className="form-control" type="text"/></span></h5>
              <h5>Address2: <br/><span className={styles.LabInfoText}><input className="form-control" type="text"/></span></h5>
            </div>
          </div>
          <div className={styles.Column}>
            <div className={styles.ColumnTwo}>
              <h5 className={styles.BottomPush}>City: <br/><span className={styles.LabInfoText}><input className="form-control" type="text"/></span></h5>
              <h5>Certificate Number: <br/><span className={styles.LabInfoText}><input className="form-control" type="text"/></span></h5>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderLabForm() {
    return (
      <div>
        <hr/>
        <form action="">
          { this.renderLabInfoHeader() }
          <hr/>
          <h4 className={styles.ReportDataHeader}>Report Data</h4>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
              <tr style={{ textAlign: 'center' }}>
                <th>A</th>
                <th>B</th>
                <th>C</th>
                <th>D</th>
                <th>E</th>
                <th>Notes</th>
              </tr>
              </thead>
              <tbody>
              { this.renderReportData() }
              </tbody>
            </table>
          </div>
        </form>
      </div>
    )
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <AdminSidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">

            <AdminHeader
              headerText="Add Lab"
              buttonText="Submit"
            />

            { console.log(this.props) }
            { this.renderLabForm() }

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

export default connect(mapStateToProps, mapDispatchToProps)(LabAdd);
