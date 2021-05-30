/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useShopList } from '../../contexts/ShopListContext';
import { Money } from '../svg/Money';
import { Ticket } from '../svg/Ticket';
import { Time } from '../svg/Time';

import s from './style.module.scss';

let teste: NodeJS.Timeout;

export const Banner: React.FC = () => {
	const [time, setTime] = useState<number>(5 * 60);
	const [bannerClicked, setBannerClicked] = useState<boolean>(false);
	const { applyCoupon } = useShopList();

	const minutes = Math.floor(time / 60)
		.toString()
		.padStart(2, '0');

	const seconds = (time % 60).toString().padStart(2, '0');

	useEffect(() => {
		if (time !== 0 && !bannerClicked) {
			teste = setTimeout(() => setTime(time - 1), 1000);
		} else if (time === 0) {
			clearTimeout(teste);
		} else if (bannerClicked) {
			applyCoupon('htmlnaoelinguagem');
			clearTimeout(teste);
		}
	}, [time, bannerClicked]);

	return (
		<div
			className={s.container}
			onClick={() => setBannerClicked(true)}
			hidden={bannerClicked || !time}
		>
			<div className={s.content}>
				<div className={s.column}>
					<h2>Aproveite agora</h2>
					<div>
						<div className={s.circle}>
							<Ticket />
						</div>
						<span>Cupom: htmlnaoelinguagem</span>
					</div>
				</div>
				<span className={s.separate} />
				<div className={s.column}>
					<h2>Finaliza em</h2>
					<div>
						<Time />
						<span>
							00:{minutes}:{seconds}
						</span>
					</div>
				</div>
				<div className={s.column}>
					<Money />
				</div>
			</div>
		</div>
	);
};
