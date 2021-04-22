const fullName = (name) => /[\D]{3,}\s[\D]{3,}/.test(name);

const email = (emailValue) => /^[\w]+@[a-z]+\.[a-z]{2,3}$/.test(emailValue);

const cellPhone = (phone) => /^\([\d]{2}\)\s[\d]{5}-[\d]{4}/.test(phone);

const street = (address) => /[\w]{5,}/.test(address);

const number = (numberValue) => /[\d\w]+/.test(numberValue);

const district = (districtValue) => /[\w]+/.test(districtValue);

const zipCode = (cep) => /[\d]{5}-[\d]{3}/.test(cep);

const city = (cityValue) => /[\w]{3,}/.test(cityValue);

const state = (stateValue) => /[\w]{2,}/.test(stateValue);

export default {
  fullName,
  email,
  cellPhone,
  street,
  number,
  district,
  zipCode,
  city,
  state,
};
