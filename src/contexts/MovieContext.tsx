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

interface IMovies {
	id: number;
	title: string;
	rating: number;
	price: number;
	poster: string;
}

interface IMoviesContex {
	movies: IMovies[];
	top5PopularMovies: IMovies[];
	getPopularMovies: () => void;
	getTop5Movies: () => void;
	getPopularMoviesByGenre: (genreId: number) => void;
}

export const MovieContext = createContext({} as IMoviesContex);

export const MovieContextProvider: React.FC = ({ children }) => {
	const [movies, setMovies] = useState<IMovies[]>([]);
	const [top5PopularMovies, setTop5PopularMovies] = useState<IMovies[]>([]);

	const getTop5Movies = async () => {
		const { data } = await api.get('discover/movie?language=pt-BR');

		const response: IMovies[] = data.results.map((movie: IData) => {
			return {
				id: movie.id,
				title: movie.title,
				rating: movie.vote_average,
				price: movie.price,
				poster: movie.poster_path,
			};
		});

		setTop5PopularMovies(response.slice(0, 5));
	};

	const getPopularMovies = async () => {
		const { data } = await api.get('discover/movie?language=pt-BR');

		const response: IMovies[] = data.results.map((movie: IData) => {
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

	const getPopularMoviesByGenre = async (genreId: number) => {
		const { data } = await api.get(
			`discover/movie?with_genres=${genreId}&language=pt-BR`,
		);

		const response: IMovies[] = data.results.map((movie: IData) => {
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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useMovies = () => {
	return useContext(MovieContext);
};
