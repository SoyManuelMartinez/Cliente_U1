// 36. Programa una función que dado un array devuelva el número más alto y el más bajo de dicho
// array, p.e. miFuncion([1,5,34,99,-2]) devolverá [99,-60]


//Considere hacerle un sort, pero no funcionaria
const findExtremes = array => {

    const max = array.reduce((a, b) => Math.max(a, b), -Infinity);
    const min = array.reduce((a, b) => Math.min(a, b), +Infinity);

    //Return devuelvo ambos parametros
    return {
        //MAX
        max : max,
        //MIN
        min: min
    }

}

let arrayNumeritos = [5,6,8,9,1];
console.log(findExtremes(arrayNumeritos));