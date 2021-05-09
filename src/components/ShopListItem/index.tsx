import React from 'react';
import { useShopList } from '../../contexts/ShopListContext';
import { Add } from '../svg/Add';
import { Remove } from '../svg/Remove';

import s from './style.module.scss';

interface IMovie {
	id: number;
	title: string;
	price: number;
	poster: string;
	amount: number;
}

export const ShopListItem = (movie: IMovie) => {
	const {
		incrementMovieInTheShopList,
		decrementMovieInTheShopList,
	} = useShopList();

	return (
		<div className={s.container}>
			<img src={movie.poster} alt="" />
			<div className={s.info}>
				<span>{movie.title}</span>
				<span>{`R$ ${movie.price.toString().replace('.', ',')}`}</span>
			</div>
			<div className={s.menu}>
				<button
					type="button"
					onClick={() => incrementMovieInTheShopList(movie)}
				>
					<Add />
				</button>
				<span>1</span>
				<button
					type="button"
					onClick={() => decrementMovieInTheShopList(movie.id)}
				>
					<Remove />
				</button>
			</div>
		</div>
	);
};
