// 21. Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola
// Mundo") devolverá "odnuM aloH".

//Metodo dar la vuelta
function inverseFrase(frase){
    //lo troceo, le doy la vuelto y lo vuelvo a unir
    return frase.split("").reverse().join("");
}

console.log(inverseFrase("Hola buenos días amigos de Youtube"));
console.log(inverseFrase("A luna ese anula."));