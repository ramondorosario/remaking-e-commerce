import React from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';

const Home = React.lazy(async () =>
	import('../container/Home').then((m) => ({ default: m.Home })),
);
const ConfirmData = React.lazy(async () =>
	import('../container/ConfirmData').then((m) => ({ default: m.ConfirmData })),
);
const Payment = React.lazy(async () =>
	import('../container/Payment').then((m) => ({ default: m.Payment })),
);

export const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" render={() => <Redirect to="/home" />} />
				<Route path="/home" component={Home} />
				<Route path="/confirmar-dados" component={ConfirmData} />
				<Route path="/pagamento" component={Payment} />
			</Switch>
		</Router>
	);
};
