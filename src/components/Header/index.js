import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './Header.module.css';

class Navbar extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <Link className="nav-link" to="/signout">Sign out</Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <Link className="nav-link" to="/signin">Sign in</Link>
          </li>
        </ul>
      );
    }
  }

  render() {
    return (
      <nav
        className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"
        style={{ height: '48px'}}
      >
        <Link
          to="/"
          className="navbar-brand"
          style={{ fontFamily: 'Exo', position: 'absolute', paddingLeft: '15px' }}
        >Animal Freedom Act!
        </Link>

      <div style={{ color: 'white', fontFamily: 'Exo', fontSize: '20px', margin: '0 auto' }}>
        California's Animal Testing Labs
      </div>

      {this.renderLinks()}
    </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  }
};

export default connect(mapStateToProps, null)(Navbar);
