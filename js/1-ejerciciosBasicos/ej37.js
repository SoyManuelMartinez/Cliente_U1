// 37. Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el
// primero almacena los números pares y en el segundo los impares, pe.
// miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}

const pairImpair = array => {

    //Devuelvo un objeto con los filtrados
    return{
        pair : array.filter(i => i%2==0),
        impair : array.filter(i => i%2==1)

    }

}

let arrayNumeritos = [1,2,3,4,5,6,7,8,9];
console.log(pairImpair(arrayNumeritos));