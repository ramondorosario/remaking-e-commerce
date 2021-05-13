import React from 'react';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
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
							<Input
								textLabel="Insira seu nome completo"
								placeholder="Ex: Ramon Do Rosário"
								type="text"
							/>
							<Input
								textLabel="Insira seu e-mail"
								placeholder="Ex: exemplo@email.com"
								type="email"
							/>
							<Input
								textLabel="Telefone"
								placeholder="Ex: (99) 9 9999-9999"
								type="tel"
							/>
						</div>
					</div>
					<div className={s.relative}>
						<PersonIcon />
						<h2>Informações de endereço</h2>
						<div className={s.containerInputs}>
							<Input
								textLabel="CEP"
								placeholder="Ex: 00000-000"
								type="number"
							/>
							<Input textLabel="País" placeholder="Ex: Brasil" type="text" />
							<Input
								textLabel="Cidade"
								placeholder="Ex: Salvador"
								type="text"
							/>
							<Input
								textLabel="Bairro"
								placeholder="Ex: São Rafael"
								type="text"
							/>
							<Input
								textLabel="Número"
								placeholder="Ex: São Rafael"
								type="number"
							/>
						</div>
					</div>
					<div>
						<h2>Informações de pagamento</h2>
						<div className={s.containerInputs}>
							<Input
								textLabel="Número do cartão"
								placeholder="Ex: 0000.0000.0000.0000"
								type="number"
							/>
							<Input
								textLabel="Nome do cartão"
								placeholder="Ex: Fulano de Tal"
								type="text"
							/>
							<Input
								textLabel="Data de expiração"
								placeholder="Ex: MM/YYYY"
								type="number"
							/>
							<Input textLabel="CVV" placeholder="Ex: 000" type="number" />
						</div>
					</div>
				</form>
				<ShopList />
			</section>
		</div>
	);
};
