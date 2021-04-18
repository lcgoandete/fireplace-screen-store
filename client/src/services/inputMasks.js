export const handleZipMask = ({ target }) => {
  target.maxLength = 9;
  let valor = target.value;
  valor = valor.replace(/\D/g, '');
  valor = valor.replace(/^(\d{5})(\d)/, '$1-$2');
  target.value = valor;
};

export const handlePhoneMask = ({ target }) => {
  target.maxLength = 15;
  let valor = target.value;
  valor = valor.replace(/\D/g, '');
  valor = valor.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  target.value = valor;
};
