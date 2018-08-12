import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Tweet from "./components/Tweet";
import SignupForm from "./components/SignupForm";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignupForm} />
            <Route path="/tweets" component={Tweet} />
          </Switch>
        </div>		
      </Router>
    );
    
  }
}

export default App;