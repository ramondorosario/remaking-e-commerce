import React from 'react';
import { Money } from '../svg/Money';
import { Ticket } from '../svg/Ticket';
import { Time } from '../svg/Time';
import Background from '../../assets/images/background-banner.png';
import s from './style.module.scss';

export const Banner: React.FC = () => {
	return (
		<div className={s.container}>
			<div className={s.content}>
				<img src={Background} alt="" />
				<div className={s.column}>
					<h2>Aproveite agora</h2>
					<p>
						<div className={s.circle}>
							<Ticket />
						</div>
						<span>Cupom: htmlnaoelinguagem</span>
					</p>
				</div>
				<div className={s.column}>
					<h2>Finaliza em</h2>
					<p>
						<Time />
						<span>00:05:00</span>
					</p>
				</div>
				<div className={s.column}>
					<Money />
				</div>
			</div>
		</div>
	);
};
