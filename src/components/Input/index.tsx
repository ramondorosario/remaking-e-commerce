/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React, { InputHTMLAttributes, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import s from './style.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error: ReactNode;
	register: UseFormRegisterReturn;
}

export const Input: React.FC<IInputProps> = (props) => {
	const { label, error, className, register } = props;

	return (
		<label className={`${s.container} ${className}`}>
			<span>{label}</span>
			<input {...register} {...props} />
			{error ?? ''}
		</label>
	);
};
