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
}

export const ShopListContext = createContext({} as IShopList);

export const ShopListProvider: React.FC = ({ children }) => {
	const [shopList, setShopList] = useState<IMovie[]>([]);
	const [totalShopList, setTotalShopList] = useState<number>(0);
	const [currentCoupon, setCurrentCoupon] = useState<string>('');

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

	const applyCoupon = (value: string) => {
		setCurrentCoupon(value.toUpperCase());
	};

	const decrementMovieInTheShopList = (id: number) => {
		const index = shopList.findIndex((movie) => movie.id === id);
		const movie = shopList[index];
		const newList = [...shopList];

		if (movie.amount > 1) {
			newList[index].amount--;
			setShopList(newList);
		} else {
			newList.splice(index, 1);
		}
		setShopList(newList);
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
			}}
		>
			{children}
		</ShopListContext.Provider>
	);
};

export const useShopList = () => {
	return useContext(ShopListContext);
};
