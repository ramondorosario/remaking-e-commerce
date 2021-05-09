import React, { useEffect, useState } from 'react';
import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import { ShopListItem } from '../../components/ShopListItem';
import { MovieCard } from '../../components/MovieCard';
import { Bag } from '../../components/svg/Bag';
import { PersonIcon } from '../../components/svg/PersonIcon';
import { Ticket } from '../../components/svg/Ticket';
import { useMovies } from '../../contexts/MovieContext';

import s from './style.module.scss';
import { useShopList } from '../../contexts/ShopListContext';

const buttons = [
	{
		id: 1,
		name: 'Todos',
	},
	{
		id: 28,
		name: 'Ação',
	},
	{
		id: 10749,
		name: 'Romance',
	},
	{
		id: 878,
		name: 'Ficção ciêntifica',
	},
	{
		id: 27,
		name: 'Terror',
	},
];

export const Home: React.FC = () => {
	const [buttonSelected, setButtonSelected] = useState<number>(1);

	const {
		getTop5Movies,
		getPopularMovies,
		getPopularMoviesByGenre,
		movies,
		top5PopularMovies,
	} = useMovies();

	const { shopList } = useShopList();

	useEffect(() => {
		getTop5Movies();
		getPopularMovies();
	}, []);

	const handleButton = (id: number) => {
		setButtonSelected(id);
		return id === 1 ? getPopularMovies() : getPopularMoviesByGenre(id);
	};

	return (
		<div className={s.container}>
			<Header />
			<div className={s.content}>
				<main>
					<Banner />
					<section className={s.containerMovies}>
						<h2>Top Filmes</h2>
						<div className={s.moviesList}>
							{top5PopularMovies.map((movie) => {
								return (
									<MovieCard
										key={movie.id}
										id={movie.id}
										title={movie.title}
										price={movie.price}
										rating={movie.rating}
										poster={movie.poster}
									/>
								);
							})}
						</div>
					</section>
					<section className={s.containerMovies}>
						<h2>Filmes</h2>
						<div className={s.moviesList}>
							{buttons.map((button) => {
								return (
									<button
										key={button.id}
										className={`${s.button} ${
											buttonSelected === button.id ? s.selected : ''
										}`}
										type="button"
										onClick={() => handleButton(button.id)}
									>
										{button.name}
									</button>
								);
							})}
							{movies.map((movie) => {
								return (
									<MovieCard
										key={movie.id}
										id={movie.id}
										title={movie.title}
										price={movie.price}
										rating={movie.rating}
										poster={movie.poster}
									/>
								);
							})}
						</div>
					</section>
				</main>
				<aside>
					<div className={s.containerShopList}>
						<header className={s.headerShopList}>
							<Bag />
							<h2>Sacola</h2>
						</header>
						<div className={s.contentShopList}>
							{shopList?.length ? (
								<div className={s.contentList}>
									{shopList.map((item) => {
										return (
											<ShopListItem
												key={item.id}
												id={item.id}
												title={item.title}
												poster={item.poster}
												price={item.price}
												amount={item.amount}
											/>
										);
									})}
								</div>
							) : (
								<>
									<h3>Sua sacola esta vazia</h3>
									<p>Adicione filmes agora</p>
									<PersonIcon />
									<p className={s.insertCupom}>Insira seu cupom</p>
								</>
							)}
							<form>
								<input type="text" placeholder="Cupom de desconto" />
								<Ticket />
							</form>
						</div>
					</div>
				</aside>
			</div>
		</div>
	);
};
