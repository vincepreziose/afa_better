import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLabs } from '../../actions';
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
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link active" to="/admin">
                  <span data-feather="home"></span>
                  Dashboard <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <span data-feather="file"></span>
                  Add Lab
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <span data-feather="shopping-cart"></span>
                  Edit Lab
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <span data-feather="users"></span>
                  Delete Lab
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <h1 className="h2">Dashboard</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group mr-2">
              <button className="btn btn-sm btn-outline-secondary">Share</button>
              <button className="btn btn-sm btn-outline-secondary">Export</button>
            </div>
          </div>
        </div>

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
