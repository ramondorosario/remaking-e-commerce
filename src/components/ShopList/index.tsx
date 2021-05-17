/* eslint-disable react/require-default-props */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useShopList } from '../../contexts/ShopListContext';
import { ShopListItem } from '../ShopListItem';
import { Bag } from '../svg/Bag';
import { PersonIcon } from '../svg/PersonIcon';
import { Ticket } from '../svg/Ticket';

import s from './style.module.scss';

interface IShopList {
	filled?: boolean;
	hasForm?: boolean;
}

export const ShopList: React.FC<IShopList> = ({
	filled,
	hasForm,
}: IShopList) => {
	const { setValue, register, watch } = useForm();
	const couponValue = watch('coupon');
	const history = useHistory();

	const {
		shopList,
		totalShopList,
		currentCoupon,
		applyCoupon,
		clearShopList,
	} = useShopList();
	const path = history.location.pathname;

	useEffect(() => {
		setValue('coupon', currentCoupon);
	}, [currentCoupon]);

	useEffect(() => {
		if (couponValue) applyCoupon(couponValue);
	}, [couponValue]);

	return (
		<div className={s.containerShopList}>
			<header className={s.headerShopList}>
				<Bag />
				<h2>{path === '/confirmar-dados' ? 'Resumo dos pedidos' : 'Sacola'}</h2>
			</header>
			<div className={s.contentShopList}>
				{shopList?.length ? (
					<div className={s.contentList}>
						{shopList.map((item) => {
							return (
								<ShopListItem
									key={item.id}
									id={item.id}
									title={item.title}
									poster={item.poster}
									price={item.price}
									amount={item.amount}
								/>
							);
						})}
					</div>
				) : (
					<>
						<h3>Sua sacola esta vazia</h3>
						<p>Adicione filmes agora</p>
						<PersonIcon />
						<p className={s.insertCupom}>Insira seu cupom</p>
					</>
				)}
				<form>
					<div>
						<input
							type="text"
							{...register('coupon')}
							placeholder="Cupom de desconto"
						/>
						<Ticket />
					</div>
					{shopList.length > 0 && (
						<button
							type="button"
							onClick={() => {
								if (path === '/home') {
									history.push('/confirmar-dados');
								} else {
									history.push('/pagamento');
									clearShopList();
								}
							}}
							disabled={hasForm && !filled}
						>
							<span>
								{hasForm ? 'Confirmar pagamento' : 'Confirme seus dados'}
							</span>
							<span>R$ {totalShopList.toString().replace('.', ',')}</span>
						</button>
					)}
				</form>
			</div>
		</div>
	);
};
