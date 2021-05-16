/* eslint-disable no-param-reassign */

export interface IMask {
	value: string | undefined;
	target: string;
	setValue(target: string, value: string | undefined): void;
}

const phoneNumber = ({ value, target, setValue }: IMask) => {
	value = value?.replace(/\D/g, '');
	value = value?.replace(/(\d{2})(\d{1})(\d{1,4})(\d{4})/g, '($1) $2 $3-$4');
	return setValue(target, value);
};

const cep = ({ target, value, setValue }: IMask) => {
	value = value?.replace(/\D/g, '');
	value = value?.replace(/(\d{5})(\d{1,3})/g, '$1-$2');
	return setValue(target, value);
};

const cardNumber = ({ target, value, setValue }: IMask) => {
	value = value?.replace(/\D/g, '');
	value = value?.match(/\d{1,4}/g)?.join(' ');

	return setValue(target, value);
};

const expirationCard = ({ target, value, setValue }: IMask) => {
	value = value?.replace(/\D/g, '');
	value = value?.replace(/(\d{2})(\d{1,4})/g, '$1/$2');

	return setValue(target, value);
};

export const masks = {
	phoneNumber,
	cep,
	cardNumber,
	expirationCard,
};
