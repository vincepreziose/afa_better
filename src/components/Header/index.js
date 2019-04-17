import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Link to="/signout">Signout</Link>
          <Link to="/admin">Admin</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signin">Signin</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">Animal Freedom Act!</Link>
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
