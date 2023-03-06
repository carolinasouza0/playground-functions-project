// Desafio 1 - Crie a função compareTrue

const compareTrue = (boolean1, boolean2) => {
  return boolean1 === true && boolean2 === true ? true : false;
};
// Desafio 2 - Crie a função splitSentence

const splitSentence = (string) => {
  return string.split(' ');
};

// Desafio 3 - Crie a função concatName

const concatName = (array) => {
  let index = 0;
  return (
    typeof array[index] === 'string' &&
    `${array[array.length - 1]}, ${array[0]}`
  );
};

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => {
  return 3 * wins + ties;
};

// Desafio 5 - Crie a função highestCount

const highestCount = (array) => {
  let iquals = 0;
  let highestNumber = Math.max(...array);

  for (let index = 0; index < array.length; index += 1) {
    if (highestNumber === array[index]) {
      iquals += 1;
    }
  }
  return iquals;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, height) => {
  return (base * height) / 2;
};

const calcRectangleArea = (base, height) => {
  return base * height;
};

const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(
      base,
      height
    )}`;
  } else if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(
      base,
      height
    )}`;
  } else {
    return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
};

// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea:
    typeof calcTriangleArea === 'function' ? calcTriangleArea : () => {},
  calcRectangleArea:
    typeof calcRectangleArea === 'function' ? calcRectangleArea : () => {},
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : () => {},
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : () => {},
  compareTrue: typeof compareTrue === 'function' ? compareTrue : () => {},
  concatName: typeof concatName === 'function' ? concatName : () => {},
  decode: typeof decode === 'function' ? decode : () => {},
  encode: typeof encode === 'function' ? encode : () => {},
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : () => {},
  footballPoints:
    typeof footballPoints === 'function' ? footballPoints : () => {},
  highestCount: typeof highestCount === 'function' ? highestCount : () => {},
  splitSentence: typeof splitSentence === 'function' ? splitSentence : () => {},
  techList: typeof techList === 'function' ? techList : () => {},
};
