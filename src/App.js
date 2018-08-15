import React, { Component } from "react"
import AppRouter  from "./router/router"
import { AUTH_TOKEN } from "./constant";

class App extends Component {
  state = {
    canAccess: false
  }

  componentDidMount(){
    const app = localStorage.getItem(AUTH_TOKEN);

    if(app === null){
      this.setState({canAccess: false});
    }else if(app === ''){
      this.setState({canAccess: false});
    }else if(app.length > 0){
      this.setState({canAccess: true});
    }
  }
  render() {
    const { canAccess } = this.state;
    return (
     <AppRouter canAccess={canAccess}/>
    );
  }
}

export default App;