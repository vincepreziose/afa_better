import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLabs } from '../../actions';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import styles from './Admin.module.css';

class Admin extends Component {

  componentDidMount() {
    if (this.props.labs.length === 0) {
      this.props.initializeLabs();
    }
  }

  handleRowClick(lab) {
    this.props.history.push(`/admin/lab/${lab.id}`)
  }

  renderLabList() {
    let rows = [];
    this.props.labs.forEach(lab => {
      rows.push(
        <tr
          className={styles.LabRow}
          key={lab.id}
          onClick={() => this.handleRowClick(lab)}>
          <td>{lab.name}</td>
          <td>{lab.address1}</td>
          <td>{lab.address2}</td>
          <td>{lab.city}</td>
          <td>{lab.certificateNum}</td>
        </tr>
      );
    });

    return (
      rows
    )
  }

  renderSpinner() {
    console.log('...Loading');
  }

  render() {
    return (
      <div className="container-fluid">
      <div className="row">
        <AdminSidebar />
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <AdminHeader
            headerText="Laboratories"
            buttonText="Export"
          />

          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address1</th>
                  <th>Address2</th>
                  <th>City</th>
                  <th>Certificate</th>
                </tr>
              </thead>
              <tbody>
              { this.props.labs.length > 0 ? this.renderLabList() : this.renderSpinner() }
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  labs: state.map.labs
});

const mapDispatchToProps = dispatch => ({
  initializeLabs: () => dispatch(getLabs())
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
