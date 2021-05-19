import React from 'react';
import './assets/styles/global.scss';
import { MovieContextProvider } from './contexts/MovieContext';
import { ShopListProvider } from './contexts/ShopListContext';
import { Routes } from './routes/routes';

export const App: React.FC = () => {
	return (
		<>
			<MovieContextProvider>
				<ShopListProvider>
					<React.Suspense fallback>
						<Routes />
					</React.Suspense>
				</ShopListProvider>
			</MovieContextProvider>
		</>
	);
};
