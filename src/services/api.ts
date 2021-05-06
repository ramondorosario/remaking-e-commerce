import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://tmdb-proxy-workers.vhfmag.workers.dev/3/',
});
// https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR
