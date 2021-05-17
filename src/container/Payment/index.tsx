import React from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components/Header';
import { PersonIcon2 } from '../../components/svg/PersonIcon2';
import { Success } from '../../components/svg/Success';

import s from './style.module.scss';

export const Payment: React.FC = () => {
	const history = useHistory();

	return (
		<div className={s.container}>
			<Header />
			<section>
				<div className={s.card}>
					<Success />
					<h2>Sucesso</h2>
					<p>Sua compra foi efetuada com sucesso!</p>
					<button type="button" onClick={() => history.push('/home')}>
						Voltar para página principal
					</button>
					<PersonIcon2 />
				</div>
			</section>
		</div>
	);
};
