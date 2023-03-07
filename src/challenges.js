// Desafio 1 - Crie a função compareTrue

const compareTrue = (boolean1, boolean2) =>
  !!boolean1 === true && boolean2 === true;

// Desafio 2 - Crie a função splitSentence

const splitSentence = (string) => string.split(' ');

// Desafio 3 - Crie a função concatName

const concatName = (array) => {
  let index = 0;
  if (typeof array[index] === 'string') {
    return `${array[array.length - 1]}, ${array[0]}`;
  }
};

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => 3 * wins + ties;

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

const calcTriangleArea = (base, height) => (base * height) / 2;

const calcRectangleArea = (base, height) => base * height;

const calcAllAreas = (base, height, form) => {
  let area;
  if (form === 'triângulo') {
    area = `O valor da área do triângulo é de: ${calcTriangleArea(
      base,
      height,
    )}`;
  } else if (form === 'retângulo') {
    area = `O valor da área do retângulo é de: ${calcRectangleArea(
      base,
      height,
    )}`;
  } else {
    area = 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
  return area;
};

// Desafio 7 - Crie a função catAndMouse

const catAndMouse = (mouse, cat1, cat2) => {
  let cat1Distance = mouse - cat1;
  let cat2Distance = mouse - cat2;
  let closest = 0;
  cat1Distance < 0 && (cat1Distance *= -1);
  cat2Distance < 0 && (cat2Distance *= -1);

  if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1Distance < cat2Distance) {
    closest = 'cat1';
  } else {
    closest = 'cat2';
  }
  return closest;
};

// Desafio 8 - Crie a função fizzBuzz

const fizzBuzz = (array) => {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      array[index] = 'fizzBuzz';
    } else if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
      array[index] = 'bug!';
    } else if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      array[index] = 'fizz';
    } else if (array[index] % 3 !== 0 && array[index] % 5 === 0) {
      array[index] = 'buzz';
    }
  }
  return array;
};

// Desafio 9 - Crie a função encode e a função decode

const encode = (string) => {
  return string
    .replace(/a/g, 1)
    .replace(/e/g, 2)
    .replace(/i/g, 3)
    .replace(/o/g, 4)
    .replace(/u/g, 5);
};

const decode = (string) => {
  return string
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
};

// Desafio 10 - Crie a função techList

const techList = (array, string) => {
  let properties = {};
  let newArray = [];
  let arraySort = array.sort();
  arraySort.map((elem) => {
    properties = {
      tech: elem,
      name: string,
    };
    newArray.push(properties);
  });
  return newArray;
};

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
