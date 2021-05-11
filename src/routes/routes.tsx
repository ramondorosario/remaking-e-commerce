import React from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import { ConfirmData } from '../container/ConfirmData';
import { Home } from '../container/Home/Home';

export const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" render={() => <Redirect to="/home" />} />
				<Route path="/home" component={Home} />
				<Route path="/confirmar-dados" component={ConfirmData} />
			</Switch>
		</Router>
	);
};
