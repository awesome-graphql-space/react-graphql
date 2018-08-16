import React, { Component } from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom";
import LandingPage from "../screens/LandingPage";
import LoginPage from "../screens/LoginPage";
import SignupPage from "../screens/SignupPage";
import HomePage from "../screens/HomePage";
import decode from 'jwt-decode'
import { AuthRoute, UnauthRoute } from "../common/RouteUtil";
import LogoutPage from "../screens/LogoutPage";

import "../App.css";
import Header from "../components/Header";
import { AUTH_TOKEN } from '../constant'

class AppRouter extends Component {

  constructor(props) {
    super(props)
    this.refreshTokenFn = this.refreshTokenFn.bind(this)

    this.state = {
      token: props.token,
    }
  }

  refreshTokenFn(data = {}) {
    const token = data.AUTH_TOKEN

    if (token) {
      localStorage.setItem(AUTH_TOKEN, token)
    } else {
      localStorage.removeItem(AUTH_TOKEN)
    }

    this.setState({
      token: data.AUTH_TOKEN,
    })
  }

  //verify localStorage check
  componentDidMount() {
    this.bootStrapData()
  }

  bootStrapData() {
    try {
      const token = localStorage.getItem(AUTH_TOKEN)
      if (token !== null && token !== undefined) {
        const expired = this.isTokenExpired(token)
        if (!expired) {
          this.setState({ token: token })
        } else {
          localStorage.removeItem(AUTH_TOKEN)
          this.setState({ token: null })
        }
      }
    } catch (e) {
      console.log('')
    }
  }

  isTokenExpired(token) {
    const date = this.getTokenExpirationDate(token)
    const offsetSeconds = 0
    if (date === null) {
      return false
    }
    return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000)
  }

  getTokenExpirationDate(token) {
    const decoded = decode(token)
    if (!decoded.exp) {
      return null
    }
    const date = new Date(0) // The 0 here is the key, which sets the date to the epoch
    date.setUTCSeconds(decoded.exp)
    return date
  }

  render() {
    const { canAccess } = this.props;
    return (
      <Router>
        <div className="App">
        {!this.state.token && <Header />}
          <Switch>
            <UnauthRoute token={this.state.token} exact path="/" canAccess={true} component={LandingPage} />
            <AuthRoute token={this.state.token} canAccess={true} path="/home" component={HomePage} />
            <UnauthRoute token={this.state.token} canAccess={true} path="/login" component={LoginPage} />
            <UnauthRoute token={this.state.token} canAccess={true} path="/signup" component={SignupPage} />
            <AuthRoute canAccess={true} path="/logout" component={LogoutPage} />
          </Switch>
        </div>		
      </Router>
    );
  }
}

export default AppRouter;