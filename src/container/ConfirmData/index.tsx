import React from 'react';
import { Header } from '../../components/Header';
import { ShopList } from '../../components/ShopList';
import { PersonIcon } from '../../components/svg/PersonIcon';

import s from './style.module.scss';

export const ConfirmData: React.FC = () => {
	return (
		<div className={s.container}>
			<Header />
			<section>
				<form>
					<div>
						<h2>Informações iniciais</h2>
						<div className={s.containerInputs}>
							<label>
								<span>Insira seu nome completo</span>
								<input type="text" placeholder="Ex: Ramon do Rosário" />
							</label>
							<label>
								<span>Insira seu e-mail</span>
								<input type="email" placeholder="Ex: exemplo@email.com" />
							</label>
							<label>
								<span>Insira seu nome completo</span>
								<input type="tel" placeholder="Ex: (99) 9 9999-9999" />
							</label>
						</div>
					</div>
					<div className={s.relative}>
						<PersonIcon />
						<h2>Informações de endereço</h2>
						<div className={s.containerInputs}>
							<label>
								<span>CEP</span>
								<input inputMode="numeric" placeholder="Ex: 00000-000" />
							</label>
							<label>
								<span>País</span>
								<input type="text" placeholder="Ex: Brasil" />
							</label>
							<label>
								<span>Cidade</span>
								<input type="text" placeholder="Ex: Salvador" />
							</label>
							<label>
								<span>Bairro</span>
								<input type="text" placeholder="Ex: São Rafael" />
							</label>
							<label>
								<span>Número</span>
								<input inputMode="numeric" placeholder="Ex: 00" />
							</label>
						</div>
					</div>
					<div>
						<h2>Informações de pagamento</h2>
						<div className={s.containerInputs}>
							<label>
								<span>Número do cartão</span>
								<input
									inputMode="numeric"
									placeholder="Ex: 0000.0000.0000.0000"
								/>
							</label>
							<label>
								<span>Nome do cartão</span>
								<input type="text" placeholder="Ex: Fulano de Tal" />
							</label>
							<label>
								<span>Data de expiração</span>
								<input type="text" placeholder="MM/YYYY" />
							</label>
							<label>
								<span>CVV</span>
								<input type="text" placeholder="Ex: São Rafael" />
							</label>
						</div>
					</div>
				</form>
				<ShopList />
			</section>
		</div>
	);
};
