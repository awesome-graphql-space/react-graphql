import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router";

/**
 * Component that protects route from unauthorized users.
 * @type {Object}
 */
export class AuthRoute extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    component: PropTypes.func,
    path: PropTypes.string,
    name: PropTypes.string,
    exact: PropTypes.bool,
    strict: PropTypes.bool
  };

  render() {
    let { canAccess, component, path, name, exact, strict } = this.props;
    let routeProps = {
      path,
      component,
      name,
      exact,
      strict
    };

    if (canAccess) {
      return <Route {...routeProps} />;
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export class UnauthRoute extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    component: PropTypes.func,
    path: PropTypes.string,
    name: PropTypes.string,
    exact: PropTypes.bool,
    strict: PropTypes.bool
  };

  render() {
    let { canAccess, component, path, name, exact, strict } = this.props;
    let routeProps = {
      path,
      component,
      name,
      exact,
      strict
    };

    if (canAccess) {
      return <Route {...routeProps} />;
    } else {
      return <Redirect to="/" />;
    }
  }
}
