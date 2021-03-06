export const PATTERN = {
	email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
	phoneNumber: /^(\([0-9]{2}\)\s)([0-9]{1}\s[0-9]{4}-[0-9]{4})$/g,
	cep: /^[0-9]{5}-[0-9]{3}$/g,
	creditCard: /^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/g,
	cvv: /^[0-9]{3}$/g,
};
