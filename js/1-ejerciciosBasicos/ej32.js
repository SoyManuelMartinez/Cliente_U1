// 32. Programa una función que dada una cadena de texto cuente el número de vocales y
// consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5

const countLetras = texto => {

    //Creo una frase copiada de la pasada pero sin espacios
    let textoModificado = texto.replace(/ /g,'');

    //Devuelvo un objeto con:
        // la longitud de la frase con vocales
        //la longitud de la frase con consonantes
    return {
        //VOCALES
        consonantes:textoModificado.match(new RegExp(/[aeiou]/ig)).length,
        //CONSONANTES
        vocales:textoModificado.match(new RegExp(/[^aeiou]/ig)).length
    }

}




console.log(countLetras("AMONG US"))
console.log(countLetras("Muy buenos dias todos soy Martinez y bienvenidos a un nuevo episodio de"));
