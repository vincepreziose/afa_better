import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import _ from 'lodash';
import AdminSidebar from '../AdminSidebar';
import AdminHeader from '../AdminHeader';
import {getLabs} from "../../../actions";

class LabView extends Component {
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

  renderLab() {
    const arg = this.state;
    let lab = this.props.labs.find((lab) => {
      return lab.id === arg.labId
    }, this.state);

    console.log(lab)
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <AdminSidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">

            <AdminHeader headerText="Lab Profile"/>

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

export default connect(mapStateToProps, mapDispatchToProps)(LabView);
