const esString = (valor) => {
  return typeof valor === "string";
};

const esNumeroEntero = (valor) => {
  return Number.isInteger(valor);
};

const esEmail = (email) => {
  const expresionRegularEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return expresionRegularEmail.test(email);
};

export default { esString, esNumeroEntero, esEmail};
