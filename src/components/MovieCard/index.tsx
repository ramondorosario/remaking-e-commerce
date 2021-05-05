import React from 'react';
import { GoldStar } from '../svg/GoldStar';
import { SilverStar } from '../svg/SilverStar';

import s from './style.module.scss';

interface IMovieCard {
	name: string;
	rating: number;
	price: number;
}

export const MovieCard: React.FC<IMovieCard> = ({
	name,
	rating,
	price,
}: IMovieCard) => {
	return (
		<div className={s.container}>
			<img src="" alt="" />
			<div className={s.content}>
				<header>
					<SilverStar />
				</header>
				<footer>
					<div className={s.info}>
						<span>{name}</span>
						<GoldStar />
						<span>{rating}</span>
					</div>
					<button type="button">
						<span>Sacola</span>
						<span>R$ {price.toString().replace('.', ',')}</span>
					</button>
				</footer>
			</div>
		</div>
	);
};
