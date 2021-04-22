import React from 'react';
import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';

import s from './style.module.scss';

export const Home: React.FC = () => {
	return (
		<div className={s.container}>
			<Header />
			<div className={s.content}>
				<main>
					<Banner />
				</main>
				<aside />
			</div>
		</div>
	);
};
