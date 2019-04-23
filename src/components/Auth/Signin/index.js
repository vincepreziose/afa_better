import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import './Signin.module.css';
import joeCool from '../../../assets/img/joe-cool.jpg';

class Signin extends Component {
  onSubmit = (formProps) => {
    this.props.signin(formProps, () => {
      this.props.history.push('/admin');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="container" style={{ marginTop: '200px'}}>
        <div className="row">
          <div className="col-md-4 offset-md-4" style={{ textAlign: 'center'}}>
            <img src={joeCool} alt="joe cool" style={{ marginBottom: '20px'}} />
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <div className="form-group">
                <Field
                  name="email"
                  type="email"
                  component="input"
                  autoComplete="none"
                  placeholder="Enter email"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <Field
                  name="password"
                  type="password"
                  component="input"
                  autoComplete="none"
                  placeholder="Enter password"
                  className="form-control"
                />
              </div>
              <div>{this.props.errorMessage}</div>
              <button type="submit" class="btn btn-block btn-outline-primary">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage
  }
}

export default compose(connect(mapStateToProps, actions), reduxForm({ form: 'signin' }))(
  Signin
);
