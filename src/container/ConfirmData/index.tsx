/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';

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

	const [hasCompletedForm, setHasCompletedForm] = useState<boolean>(false);
	const [hasError, setHasError] = useState<boolean>(false);
	const allInputs = watch();

	useEffect(() => {
		const hasCompleted = Object.values(allInputs).every((e) => Boolean(e));
		const hasInputError = Object.keys(allInputs).some((e) =>
			Boolean(errors[e]?.message),
		);
		setHasCompletedForm(hasCompleted);
		setHasError(hasInputError);
	}, [allInputs]);

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
								label="Insira seu nome completo"
								placeholder="Ex: Fulano de Tal"
								type="text"
								register={register('name', {
									required: 'Campo obrigatório',
								})}
								error={errors.name && <p>{errors.name.message}</p>}
							/>

							<Input
								className={errors.email ? s.error : ''}
								label="Insira seu e-mail"
								placeholder="Ex: exemplo@email.com"
								type="email"
								register={register('email', {
									required: 'Campo obrigatório',
									pattern: {
										value: PATTERN.email,
										message: 'Formato de email inválido',
									},
								})}
								error={errors.email && <p>{errors.email.message}</p>}
							/>
							<Input
								className={errors.tel ? s.error : ''}
								label="Telefone"
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
								error={errors.tel && <p>{errors.tel.message}</p>}
							/>
						</div>
					</div>
					<div className={s.relative}>
						<PersonIcon />
						<h2>Informações de endereço</h2>
						<div className={s.containerInputs}>
							<Input
								className={errors.cep ? s.error : ''}
								label="CEP"
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
								error={errors.cep && <p>{errors.cep.message}</p>}
							/>
							<Input
								className={errors.country ? s.error : ''}
								label="País"
								placeholder="Ex: Brasil"
								type="text"
								register={register('country', {
									required: 'Campo obrigatório',
								})}
								error={errors.country && <p>{errors.country.message}</p>}
							/>
							<Input
								className={errors.city ? s.error : ''}
								label="Cidade"
								placeholder="Ex: Salvador"
								type="text"
								register={register('city', {
									required: 'Campo obrigatório',
								})}
								error={errors.city && <p>{errors.city.message}</p>}
							/>
							<Input
								className={errors.neighborhood ? s.error : ''}
								label="Bairro"
								placeholder="Ex: São Rafael"
								type="text"
								register={register('neighborhood', {
									required: 'Campo obrigatório',
								})}
								error={
									errors.neighborhood && <p>{errors.neighborhood.message}</p>
								}
							/>
							<Input
								className={errors.houseNumber ? s.error : ''}
								label="Número"
								placeholder="Ex: 00"
								type="number"
								register={register('houseNumber', {
									required: 'Campo obrigatório',
								})}
								error={
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
								label="Número do cartão"
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
								error={errors.cardNumber && <p>{errors.cardNumber.message}</p>}
							/>
							<Input
								className={`${s.inputNameCard} ${
									errors.cardName ? s.error : ''
								}`}
								label="Nome do cartão"
								placeholder="Ex: Fulano de Tal"
								type="text"
								register={register('cardName', {
									required: 'Campo obrigatório',
								})}
								error={errors.cardName && <p>{errors.cardName.message}</p>}
							/>
							<Input
								className={errors.expirationCard ? s.error : ''}
								label="Data de expiração"
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
								error={
									errors.expirationCard && (
										<p>{errors.expirationCard.message}</p>
									)
								}
							/>
							<Input
								className={errors.cvv ? s.error : ''}
								label="CVV"
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
								error={errors.cvv && <p>{errors.cvv.message}</p>}
							/>
						</div>
					</div>
				</form>
				<ShopList hasForm filled={hasCompletedForm && !hasError} />
			</section>
		</div>
	);
};
