import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import App from "./App"
import LoginForm from "./components/LoginForm"

 const AppRouter = () => (
	<Router>
		<div>
				<Route exact path="/" component={App} />
        <Route path="/login" component={LoginForm} />
		</div>		
	</Router>
)
 export default AppRouter