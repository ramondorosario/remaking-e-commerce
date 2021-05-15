/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React, { InputHTMLAttributes, ReactNode } from 'react';

import s from './style.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	textLabel: string;
	elementError: ReactNode;
	register: any;
}

export const Input: React.FC<IInputProps> = (props) => {
	const { textLabel, elementError, className, register } = props;

	return (
		<label className={`${s.container} ${className}`}>
			<span>{textLabel}</span>
			<input {...register} {...props} />
			{elementError ?? ''}
		</label>
	);
};
