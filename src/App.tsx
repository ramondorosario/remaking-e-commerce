import React from 'react';
import { Home } from './container/Home/Home';
import './assets/styles/global.scss';
import { MovieContextProvider } from './contexts/MovieContext';
import { ShopListProvider } from './contexts/ShopListContext';

export const App: React.FC = () => {
	return (
		<>
			<MovieContextProvider>
				<ShopListProvider>
					<Home />
				</ShopListProvider>
			</MovieContextProvider>
		</>
	);
};
