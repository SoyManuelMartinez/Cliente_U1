// 19. Programa una función que dada una String te devuelva un Array de textos separados por
// cierto carácter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']

// function descuartizarString (frase){
//     let newWord;
//     let frasesArray = []

//     //Entro en bucle
//     frase.forEach(i => {
//         //Almaceno la frase
//         newWord.push(frase.charAt(i));
//         //Si encuentro un espacio
//         if(frase.charAt(i)===" "){
//             //Añado la palabra
//             frasesArray.push(newWord);
//             //Y reseto el lector
//             newWord = "";

//         }
//     });

//     return frasesArray;
// }


function descuartizarStringSplit (frase){
    let fraseArray=[];
    fraseArray = frase.split(" ")
    return fraseArray;
}

console.log(descuartizarStringSplit("Muy buenos días amigos de internet"));