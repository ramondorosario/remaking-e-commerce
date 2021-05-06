import React from 'react';
import { Home } from './container/Home/Home';
import './assets/styles/global.scss';
import { MovieContextProvider } from './contexts/MovieContext';

export const App: React.FC = () => {
	return (
		<>
			<MovieContextProvider>
				<Home />
			</MovieContextProvider>
		</>
	);
};
