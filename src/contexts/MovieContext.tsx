/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';
import { api } from '../services/api';

interface IData {
	id: number;
	title: string;
	vote_average: number;
	price: number;
	poster_path: string;
}

interface IMovie {
	id: number;
	title: string;
	rating: number;
	price: number;
	poster: string;
	amount: number;
}

interface IMovieContex {
	movies: IMovie[];
	top5PopularMovies: IMovie[];
	getPopularMovies: () => void;
	getTop5Movies: () => void;
	getPopularMoviesByGenre: (genreId: number) => void;
}

export const MovieContext = createContext({} as IMovieContex);

export const MovieContextProvider: React.FC = ({ children }) => {
	const [movies, setMovies] = useState<IMovie[]>([]);
	const [top5PopularMovies, setTop5PopularMovies] = useState<IMovie[]>([]);

	const getTop5Movies = async () => {
		const { data } = await api.get('discover/movie?language=pt-BR');

		const response: IMovie[] = data.results.map((movie: IData) => {
			return {
				id: movie.id,
				title: movie.title,
				rating: movie.vote_average,
				price: movie.price,
				poster: movie.poster_path,
				amount: 0,
			};
		});

		setTop5PopularMovies(response.slice(0, 5));
	};

	const getPopularMovies = async () => {
		const { data } = await api.get('discover/movie?language=pt-BR');

		const response: IMovie[] = data.results.map((movie: IData) => {
			return {
				id: movie.id,
				title: movie.title,
				rating: movie.vote_average,
				price: movie.price,
				poster: movie.poster_path,
				amount: 0,
			};
		});

		setMovies(response);
	};

	const getPopularMoviesByGenre = async (genreId: number) => {
		const { data } = await api.get(
			`discover/movie?with_genres=${genreId}&language=pt-BR`,
		);

		const response: IMovie[] = data.results.map((movie: IData) => {
			return {
				id: movie.id,
				title: movie.title,
				rating: movie.vote_average,
				price: movie.price,
				poster: movie.poster_path,
			};
		});

		setMovies(response);
	};

	return (
		<MovieContext.Provider
			value={{
				movies,
				top5PopularMovies,
				getPopularMovies,
				getTop5Movies,
				getPopularMoviesByGenre,
			}}
		>
			{children}
		</MovieContext.Provider>
	);
};

export const useMovies = () => {
	return useContext(MovieContext);
};
