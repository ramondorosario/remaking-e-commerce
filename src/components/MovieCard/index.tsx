import React from 'react';
import { useMovies } from '../../contexts/MovieContext';
import { useShopList } from '../../contexts/ShopListContext';
import { GoldStar } from '../svg/GoldStar';
import { SilverStar } from '../svg/SilverStar';

import s from './style.module.scss';

interface IMovieCard {
	id: number;
	title: string;
	rating: number;
	price: number;
	poster: string;
}

export const MovieCard: React.FC<IMovieCard> = (movie: IMovieCard) => {
	const { incrementMovieInTheShopList } = useShopList();
	const { movies } = useMovies();

	const movieItem = movies.find((item) => item.id === movie.id);

	return (
		<div className={s.container}>
			<img src={movie.poster} alt="Banner do filme" />
			<div className={s.content}>
				<header>
					<SilverStar />
				</header>
				<footer>
					<div className={s.info}>
						<span>{movie.title}</span>
						<GoldStar />
						<span>{movie.rating}</span>
					</div>
					<button
						type="button"
						onClick={() => {
							if (movieItem) {
								incrementMovieInTheShopList(movieItem);
							}
						}}
					>
						<span>Sacola</span>
						<span>R$ {movie.price.toString().replace('.', ',')}</span>
					</button>
				</footer>
			</div>
		</div>
	);
};
