import React from 'react';
import { Header } from '../../components/Header';

import s from './style.module.scss';

export const Home: React.FC = () => {
	return (
		<div className={s.container}>
			<Header />
		</div>
	);
};
