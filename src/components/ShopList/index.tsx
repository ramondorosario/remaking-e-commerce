import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useShopList } from '../../contexts/ShopListContext';
import { ShopListItem } from '../ShopListItem';
import { Bag } from '../svg/Bag';
import { PersonIcon } from '../svg/PersonIcon';
import { Ticket } from '../svg/Ticket';

import s from './style.module.scss';

export const ShopList: React.FC = () => {
	const { setValue, register, watch } = useForm();
	const couponValue = watch('coupon');

	const { shopList, totalShopList, currentCoupon, applyCoupon } = useShopList();

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
				<h2>Sacola</h2>
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
						<button type="button">
							<span>Confirme seus dados</span>
							<span>R$ {totalShopList.toString().replace('.', ',')}</span>
						</button>
					)}
				</form>
			</div>
		</div>
	);
};
