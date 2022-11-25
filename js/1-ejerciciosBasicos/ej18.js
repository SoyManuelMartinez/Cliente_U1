// 18. Programa una función que te devuelva el texto recortado según el número de caracteres
// indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola".

// function recortarTexto(frase, max){
//     let newFrase;
//     for(let i=0; i<max; i++){
//         newFrase.push(frase.charAt(i));
//     }
//     return newFrase;
// }

function recortarTextoSubstring(frase, max){
    return frase.substring(0,max);

}

console.log(recortarTextoSubstring("Hola mundo",4));