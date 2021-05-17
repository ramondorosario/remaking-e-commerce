/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from 'react';

interface IMovie {
	id: number;
	title: string;
	price: number;
	poster: string;
	amount: number;
}

interface IShopList {
	shopList: IMovie[];
	totalShopList: number;
	currentCoupon: string;
	incrementMovieInTheShopList: (item: IMovie) => void;
	decrementMovieInTheShopList: (id: number) => void;
	applyCoupon: (value: string) => void;
	clearShopList: () => void;
}

export const ShopListContext = createContext({} as IShopList);

export const ShopListProvider: React.FC = ({ children }) => {
	const moviesStorage = localStorage.getItem('shopList');
	const [shopList, setShopList] = useState<IMovie[]>(
		JSON.parse(moviesStorage!) || [],
	);
	const [totalShopList, setTotalShopList] = useState<number>(0);
	const [currentCoupon, setCurrentCoupon] = useState<string>('');

	const incrementMovieInTheShopList = (item: IMovie) => {
		const index = shopList.findIndex((movie) => movie.id === item.id);

		if (index !== -1) {
			shopList[index].amount++;
		} else {
			shopList.push(item);
		}

		localStorage.setItem('shopList', JSON.stringify(shopList));

		const data = localStorage.getItem('shopList');
		setShopList(JSON.parse(data!));
	};

	const applyCoupon = (value: string) => {
		setCurrentCoupon(value.toUpperCase());
	};

	const decrementMovieInTheShopList = (id: number) => {
		const index = shopList.findIndex((movie) => movie.id === id);
		const movie = shopList[index];

		if (movie.amount > 1) {
			shopList[index].amount--;
		} else {
			shopList.splice(index, 1);
		}

		if (!shopList.length) {
			localStorage.removeItem('shopList');
		} else {
			localStorage.setItem('shopList', JSON.stringify(shopList));
		}

		const data = localStorage.getItem('shopList');
		setShopList(JSON.parse(data!) ?? []);
	};

	const clearShopList = () => {
		localStorage.removeItem('shopList');
		setShopList([]);
		setCurrentCoupon('');
	};

	useEffect(() => {
		const value = shopList.reduce(
			(acc, item) =>
				currentCoupon === 'htmlnaoelinguagem'.toUpperCase()
					? acc + item.price * 0.5 * item.amount
					: acc + item.price * item.amount,
			0,
		);
		setTotalShopList(value);
	}, [shopList, currentCoupon]);

	return (
		<ShopListContext.Provider
			value={{
				shopList,
				totalShopList,
				currentCoupon,
				applyCoupon,
				incrementMovieInTheShopList,
				decrementMovieInTheShopList,
				clearShopList,
			}}
		>
			{children}
		</ShopListContext.Provider>
	);
};

export const useShopList = () => {
	return useContext(ShopListContext);
};
