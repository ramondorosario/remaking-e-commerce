/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React, { InputHTMLAttributes } from 'react';

import s from './style.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	textLabel: string;
}

export const Input: React.FC<IInputProps> = (props) => {
	const { textLabel } = props;

	return (
		<label>
			<span>{textLabel}</span>
			<input {...props} />
		</label>
	);
};
