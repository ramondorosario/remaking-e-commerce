/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';

interface IMovie {
	id: number;
	title: string;
	price: number;
	poster: string;
	amount: number;
}

interface IShopList {
	shopList: IMovie[];
	incrementMovieInTheShopList: (item: IMovie) => void;
	decrementMovieInTheShopList: (id: number) => void;
}

export const ShopListContext = createContext({} as IShopList);

export const ShopListProvider: React.FC = ({ children }) => {
	const [shopList, setShopList] = useState<IMovie[]>([]);

	const incrementMovieInTheShopList = (item: IMovie) => {
		const index = shopList.findIndex((movie) => movie.id === item.id);
		const newList = [...shopList];

		if (index !== -1) {
			newList[index].amount++;
			setShopList(newList);
		} else {
			setShopList([...shopList, item]);
		}
	};

	const decrementMovieInTheShopList = (id: number) => {
		const index = shopList.findIndex((movie) => movie.id === id);
		const movie = shopList[index];
		const newList = [...shopList];

		if (movie.amount > 0) {
			newList[index].amount--;
			setShopList(newList);
		} else {
			newList.splice(index, 1);
		}
		setShopList(newList);
	};

	return (
		<ShopListContext.Provider
			value={{
				shopList,
				incrementMovieInTheShopList,
				decrementMovieInTheShopList,
			}}
		>
			{children}
		</ShopListContext.Provider>
	);
};

export const useShopList = () => {
	return useContext(ShopListContext);
};
