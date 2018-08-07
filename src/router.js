import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import App from "./App"
import LoginForm from "./components/LoginForm"
import Tweet from "./components/Tweet"

 const AppRouter = () => (
	<Router>
		<div>
				<Route exact path="/" component={App} />
        <Route path="/login" component={LoginForm} />
        <Route path="/tweet" component={Tweet} />
		</div>		
	</Router>
)
 export default AppRouter