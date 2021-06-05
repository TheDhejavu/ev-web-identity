import React, {Component} from "react";
import {Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Identity from './Identity';
import Login from './Login';
import Enroll from './Enroll';
import NotFound from './NotFound';

class Routes extends Component {
	render() {
		return (
			<div className="main-content-wrapper">
				<BrowserRouter>
					<Switch>
						<Route path="/identity" component={Identity}/>
						<Route path="/login" component={Login}/>
						<Route path="/enroll" component={Enroll}/>
						<Route path="/" component={Home}/>
						<Route component={NotFound}/>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default Routes