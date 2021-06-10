export const handleZipMask = (target) => {
  if (target) {
    target.maxLength = 9;
    let valor = target.value;
    valor = valor.replace(/\D/g, '');
    valor = valor.replace(/^(\d{1,5})(\d{1,3})/, '$1-$2');
    target.value = valor;
  }
};

export const handlePhoneMask = (target) => {
  if (target) {
    target.maxLength = 15;
    let valor = target.value;
    valor = valor.replace(/\D/g, '');
    valor = valor.replace(/^(\d{1,2})(\d{1,5})(\d{1,4})/, '($1) $2-$3');
    target.value = valor;
  }
};
