import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import AdminSidebar from '../AdminSidebar';
import AdminHeader from '../AdminHeader';
import styles from './LabAdd.module.css';

class LabAdd extends Component {

  state = {
    rows: []
  }

  onSubmit = (formProps) => {
    console.log('Form Props: ', formProps)
  };

  handleAddRow(e) {
    console.log('handleAddRow');
    console.log(e.target)
    e.preventDefault();
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
              <h5 className={styles.BottomPush}>Name: <br />
                <span className={styles.LabInfoText}>
                  <Field
                    name="name"
                    className="form-control"
                    component="input"
                    autoComplete="none"
                  />
                </span>
              </h5>
              <h5 className={styles.BottomPush}>Address1: <br/>
                <span className={styles.LabInfoText}>
                  <Field
                    name="address1"
                    className="form-control"
                    component="input"
                    autoComplete="none"
                  />
                </span>
              </h5>
              <h5>Address2: <br/>
                <span className={styles.LabInfoText}>
                  <Field
                    name="address2"
                    className="form-control"
                    component="input"
                    autoComplete="none"
                  />
                </span>
              </h5>
            </div>
          </div>
          <div className={styles.Column}>
            <div className={styles.ColumnTwo}>
              <h5 className={styles.BottomPush}>City: <br/>
                <span className={styles.LabInfoText}>
                  <Field
                    name="city"
                    className="form-control"
                    component="input"
                    autoComplete="none"
                  />
                </span>
              </h5>
              <h5>Certificate Number: <br/>
                <span className={styles.LabInfoText}>
                  <Field
                    name="certificateNum"
                    className="form-control"
                    component="input"
                    autoComplete="none"
                  />
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderLabForm() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <hr/>
        <form onSubmit={handleSubmit(this.onSubmit)}>
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
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group mr-2">
                <button
                  onClick={this.handleAddRow}
                  className="btn btn-sm btn-outline-secondary">Add Row
                </button>
              </div>
            </div>
            <div style={{ width: '300px', marginTop: '35px' }}>
              <button type="submit" className="btn btn-block btn-success">Add Lab</button>
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
            />

            { this.renderLabForm() }

          </main>
        </div>
      </div>
    )
  }
}

export default compose(connect(null, actions), reduxForm({ form: 'addLab' }))(
  LabAdd
);
