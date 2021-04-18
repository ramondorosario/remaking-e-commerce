import React from 'react';
import { BookMark } from '../svg/BookMark';
import { DiscountHeader } from '../svg/DiscountHeader';
import { Logo } from '../svg/Logo';
import { SearchIcon } from '../svg/SearchIcon';
import s from './style.module.scss';

export const Header: React.FC = () => {
	return (
		<div className={s.container}>
			<div className={s.center}>
				<Logo />
				<form className={s.form}>
					<input type="text" placeholder="Pesquise filmes..." />
					<button type="button">
						<SearchIcon />
					</button>
				</form>
				<a href="/">
					<BookMark /> Favoritos
				</a>
				<a href="/">
					<DiscountHeader /> Promoções
				</a>
				<div className={s.profile}>
					<p>Bem vindo, Fulano</p>
					<div className={s.userAvatar} />
				</div>
			</div>
		</div>
	);
};
