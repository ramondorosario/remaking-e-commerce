import React from 'react';
import { Money } from '../svg/Money';
import { Ticket } from '../svg/Ticket';
import { Time } from '../svg/Time';
import s from './style.module.scss';

export const Banner: React.FC = () => {
	return (
		<div className={s.container}>
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
						<span>00:05:00</span>
					</div>
				</div>

				<div className={s.column}>
					<Money />
				</div>
			</div>
		</div>
	);
};
