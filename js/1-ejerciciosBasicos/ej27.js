// 27. En un vector de números, indicar:

let vectorEjemplo = [2,777,666,985,55,32];

// a. El número de elementos del vector.
console.log(vectorEjemplo.length);

// b. Cuántos son pares y cuántos impares y cuáles son.
console.log(vectorEjemplo.filter(i => i%2==0), 'pares y ', vectorEjemplo.filter(i => i%2==1),' impares');

// c. La suma de todos los números negativos.

//Comprobar que sea negativos
console.log(vectorEjemplo.reduce(prevValue, currectValue));

//d. El producto de todos los números positivos.
// let vectorProductos = vectorEjemplo.reduce(product, i){
//     if(i>0){
//         product*i;
//     }
// };
// console.log(vectorProductos.length);

// e. Cuántos son primos y cuáles son.

//FUNCIÓN: Comprueba que un numero sea primo
const isPrime = num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  };

let vectorPrime = vectorEjemplo.filter(isPrime);

//g. El número mayor.
console.log(Math.max(vectorEjemplo));

//h. El número menor.
console.log(Math.min(vectorEjemplo));

// i. La media de todos los números, los números que están por encima y los que están por
// debajo.

// j. El vector ordenado de mayor a menos y viceversa.
