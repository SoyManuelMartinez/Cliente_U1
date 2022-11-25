// //35. Programa una función que dado un array numérico devuelve otro array con los números
// elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]

const poweredArray = array => array.map(x => Math.pow(x,2));

let arrayNumeritos = [1,2,3,4,5,6];
console.log(poweredArray(arrayNumeritos));