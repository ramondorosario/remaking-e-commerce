/* eslint-disable no-param-reassign */
import React from 'react';

import { useForm } from 'react-hook-form';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ShopList } from '../../components/ShopList';
import { PersonIcon } from '../../components/svg/PersonIcon';
import { PATTERN } from '../../utils/pattern';
import { masks } from '../../utils/masks';

import s from './style.module.scss';

export const ConfirmData: React.FC = () => {
	const {
		register,
		formState: { errors },
		watch,
		setValue,
	} = useForm({ mode: 'onBlur' });

	return (
		<div className={s.container}>
			<Header />
			<section>
				<form>
					<div>
						<h2>Informações iniciais</h2>
						<div className={s.containerInputs}>
							<Input
								className={errors.name ? s.error : ''}
								textLabel="Insira seu nome completo"
								placeholder="Ex: Fulano de Tal"
								type="text"
								register={register('name', {
									required: 'Campo obrigatório',
								})}
								elementError={errors.name && <p>{errors.name.message}</p>}
							/>

							<Input
								className={errors.email ? s.error : ''}
								textLabel="Insira seu e-mail"
								placeholder="Ex: exemplo@email.com"
								type="email"
								register={register('email', {
									required: 'Campo obrigatório',
									pattern: {
										value: PATTERN.email,
										message: 'Formato de email inválido',
									},
								})}
								elementError={errors.email && <p>{errors.email.message}</p>}
							/>
							<Input
								className={errors.tel ? s.error : ''}
								textLabel="Telefone"
								placeholder="Ex: (99) 9 9999-9999"
								maxLength={16}
								type="tel"
								onChange={(e) => {
									masks.phoneNumber({
										target: 'tel',
										value: e.target.value,
										setValue,
									});
								}}
								register={register('tel', {
									required: 'Campo obrigatório',
									pattern: {
										value: PATTERN.phoneNumber,
										message: 'Informe um número válido',
									},
								})}
								elementError={errors.tel && <p>{errors.tel.message}</p>}
							/>
						</div>
					</div>
					<div className={s.relative}>
						<PersonIcon />
						<h2>Informações de endereço</h2>
						<div className={s.containerInputs}>
							<Input
								className={errors.cep ? s.error : ''}
								textLabel="CEP"
								placeholder="Ex: 00000-000"
								maxLength={9}
								type="tel"
								onChange={(e) => {
									masks.cep({ target: 'cep', value: e.target.value, setValue });
								}}
								register={register('cep', {
									required: 'Campo obrigatório',
									pattern: {
										value: PATTERN.cep,
										message: 'Informe um CEP válido',
									},
								})}
								elementError={errors.cep && <p>{errors.cep.message}</p>}
							/>
							<Input
								className={errors.country ? s.error : ''}
								textLabel="País"
								placeholder="Ex: Brasil"
								type="text"
								register={register('country', {
									required: 'Campo obrigatório',
								})}
								elementError={errors.country && <p>{errors.country.message}</p>}
							/>
							<Input
								className={errors.city ? s.error : ''}
								textLabel="Cidade"
								placeholder="Ex: Salvador"
								type="text"
								register={register('city', {
									required: 'Campo obrigatório',
								})}
								elementError={errors.city && <p>{errors.city.message}</p>}
							/>
							<Input
								className={errors.neighborhood ? s.error : ''}
								textLabel="Bairro"
								placeholder="Ex: São Rafael"
								type="text"
								register={register('neighborhood', {
									required: 'Campo obrigatório',
								})}
								elementError={
									errors.neighborhood && <p>{errors.neighborhood.message}</p>
								}
							/>
							<Input
								className={errors.houseNumber ? s.error : ''}
								textLabel="Número"
								placeholder="Ex: 00"
								type="number"
								register={register('houseNumber', {
									required: 'Campo obrigatório',
								})}
								elementError={
									errors.houseNumber && <p>{errors.houseNumber.message}</p>
								}
							/>
						</div>
					</div>
					<div>
						<h2>Informações de pagamento</h2>
						<div className={s.containerInputs}>
							<Input
								className={errors.cardNumber ? s.error : ''}
								textLabel="Número do cartão"
								placeholder="Ex: 0000 0000 0000 0000"
								maxLength={19}
								onChange={(e) => {
									masks.cardNumber({
										target: 'cardNumber',
										value: e.target.value,
										setValue,
									});
								}}
								type="tel"
								register={register('cardNumber', {
									required: 'Campo obrigatório',
									pattern: {
										value: PATTERN.creditCard,
										message: 'Número do cartão inválido',
									},
								})}
								elementError={
									errors.cardNumber && <p>{errors.cardNumber.message}</p>
								}
							/>
							<Input
								className={`${s.inputNameCard} ${
									errors.cardName ? s.error : ''
								}`}
								textLabel="Nome do cartão"
								placeholder="Ex: Fulano de Tal"
								type="text"
								register={register('cardName', {
									required: 'Campo obrigatório',
								})}
								elementError={
									errors.cardName && <p>{errors.cardName.message}</p>
								}
							/>
							<Input
								className={errors.expirationCard ? s.error : ''}
								textLabel="Data de expiração"
								placeholder="Ex: MM/YYYY"
								type="tel"
								maxLength={7}
								onChange={(e) => {
									masks.expirationCard({
										target: 'expirationCard',
										value: e.target.value,
										setValue,
									});
								}}
								register={register('expirationCard', {
									required: 'Campo obrigatório',
								})}
								elementError={
									errors.expirationCard && (
										<p>{errors.expirationCard.message}</p>
									)
								}
							/>
							<Input
								className={errors.cvv ? s.error : ''}
								textLabel="CVV"
								placeholder="Ex: 000"
								maxLength={3}
								type="tel"
								register={register('cvv', {
									required: 'Campo obrigatório',
									pattern: {
										value: PATTERN.cvv,
										message: 'CVV inválido',
									},
								})}
								elementError={errors.cvv && <p>{errors.cvv.message}</p>}
							/>
						</div>
					</div>
				</form>
				<ShopList />
			</section>
		</div>
	);
};
