import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
      <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <Link to="/" className="navbar-brand col-sm-3 col-md-2 mr-0">Animal Freedom Act!</Link>
      <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"></input>
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
