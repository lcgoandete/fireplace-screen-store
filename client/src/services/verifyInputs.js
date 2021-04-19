export const verifyName = (name) => /[\D]{3,}\s[\D]{3,}/.test(name);

export const verifyEmail = (email) => /^[\w]+@[a-z]+\.\w{2,3}$/.test(email);

export const verifyPhone = (phone) => /[\d]{11}/.test(phone);

export const verifyAddress = (address) => /[\w]{5,}/.test(address);

export const verifyNumber = (number) => /[\d\w]+/.test(number);

export const verifyDistrict = (district) => /[\w]+/.test(district);

export const verifyCep = (cep) => /[\w]{8}/.test(cep);

export const verifyCity = (city) => /[\w]{3,}/.test(city);

export const verifyState = (state) => /[\w]{2,}/.test(state);
