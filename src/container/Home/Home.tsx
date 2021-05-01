import React from 'react';
import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import { Bag } from '../../components/svg/Bag';
import { PersonIcon } from '../../components/svg/PersonIcon';
import { Ticket } from '../../components/svg/Ticket';

import s from './style.module.scss';

export const Home: React.FC = () => {
	return (
		<div className={s.container}>
			<Header />
			<div className={s.content}>
				<main>
					<Banner />
				</main>
				<aside>
					<div className={s.containerBag}>
						<div className={s.headerBag}>
							<Bag />
							<h2>Sacola</h2>
						</div>
						<div className={s.contentBag}>
							<h3>Sua sacola esta vazia</h3>
							<p>Adicione filmes agora</p>
							<PersonIcon />
							<p className={s.insertCupom}>Insira seu cupom</p>
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
