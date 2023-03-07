// Desafio 11 - Crie a função generatePhoneNumber

const countIquals = (array) => {
  let counts = {};
  array.forEach((count) => {
    counts[count] = (counts[count] || 0) + 1;
  });
  const iquals = Math.max(...Object.values(counts));
  return iquals;
};

const errorMessage = (array) => {
  let error = '';

  if (array.length > 11 || array.length < 11) {
    error = 'Array com tamanho incorreto.';
    return error;
  }
  array.forEach((elem) => {
    if (elem < 0 || elem > 9 || countIquals(array) >= 3) {
      error = 'não é possível gerar um número de telefone com esses valores';
    }
  });
  return error;
};

const generatePhoneNumber = (array) => {
  let number = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  return errorMessage(array) || number;
};
// Desafio 12 -  Crie a função triangleCheck

const triangleCheck = (lineA, lineB, lineC) => !!(lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC));

// Desafio 13 - Crie a função hydrate

const hydrate = (string) => {
  let array = string.match(/\d+/g);
  let arrayNumbers = array.map(Number);

  let sum = arrayNumbers.reduce((accum, elem) => accum + elem, 0);

  return sum > 1 ? `${sum} copos de água` : `${sum} copo de água`;
};

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber:
    typeof generatePhoneNumber === 'function' ? generatePhoneNumber : () => {},
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : () => {},
  hydrate: typeof hydrate === 'function' ? hydrate : () => {},
};
