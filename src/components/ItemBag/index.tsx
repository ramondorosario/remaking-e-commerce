import React from 'react';
import { Add } from '../svg/Add';
import { Remove } from '../svg/Remove';

import s from './style.module.scss';

export const ItemBag: React.FC = () => {
	return (
		<div className={s.container}>
			<img src="" alt="" />
			<div className={s.info}>
				<span>Joker</span>
				<span>R$ 2,49</span>
			</div>
			<div className={s.menu}>
				<button type="button">
					<Add />
				</button>
				<span>1</span>
				<button type="button">
					<Remove />
				</button>
			</div>
		</div>
	);
};
