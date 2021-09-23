// Multiplicar dos numeros sin usar el singo  de multiplicar

const multiply = (a, b) => {
  let result = 0;
  const positive = Math.abs(b) == b;
  for (let i = 0; i < Math.abs(b); i++) {
    result = positive ? result + a : result - a;
  }
  return result;
};
const a = multiply(2, -3);
console.log(a);

// Obtener el numero mayor de un arreglo , pero iterando solo una vez
const getBiggest = (arr) => arr.reduce((acc, el) => (acc > el ? acc : el));
const b = getBiggest([1, 4, 500, 6, 8, 9, 100]);
console.log(b);

// iterando un arreglo una sola vez , eliminar los 0 , undefined y null
const clean = (arr) =>
  arr.reduce((acc, el) => {
    if (el) {
      acc.push(el);
    }
    return acc;
  }, []);
const c = clean([1, 0, 3, 4, 5, undefined, null]);
console.log(c);

// Escribir una funcion que aplane un array
const arr = [[1, 2], [[1, 1, 1, 1]], [1, []]];
// [1,2.[1,1,1,1],1,[]]
const aplanarArr = (arr) => arr.reduce((acc, el) => acc.concat(el), []);
// concat , concatena los arreglos agregandolo al acomulador
const d = aplanarArr(arr);
console.log(d);

// Realizar una funcion que cuente la cantidad de veces que se repite una palabra en un string
const repeted = (str) => {
  const lowered = str.toLowerCase();
  const splited = lowered.split(" ");
  // forma 1
  //   const resed = splited.reduce((acc, el) => {
  //     if (acc[el]) {
  //       acc[el]++;
  //     } else {
  //       acc[el] = 1;
  //     }
  //     return acc;
  //   }, {});
  //   return Object.entries(resed).reduce((acc,el)=> acc[1] > el[1]? acc : el)

  // Forma 2
  const repetedObject = {};
  splited.forEach((element) => {
    repetedObject[element] = repetedObject[element]
      ? repetedObject[element] + 1
      : 1;
  }, {});
  // console.log(repetedObject)
  return Object.entries(repetedObject).reduce((acc, el) =>
    acc[1] > el[1] ? acc : el
  );
};
const e = repeted("una prueba de palabra  repetidas a a a a A a A");
// console.log(e)

const arrNum = [1, 2, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9];
console.log("****************************");
// const repetedNum = arrNum.reduce((acc, el) => {
//    console.log('acc: '+acc+ ' el: '+el)
//   if (acc.include) {

//   }

// })
const elem = arrNum.filter((item, i) => item == arrNum[i + 1]);
elem[0];

console.log(elem[0]);
console.log("****************************");
