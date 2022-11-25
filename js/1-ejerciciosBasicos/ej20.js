// 20. Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá
// Hola Mundo Hola Mundo Hola Mundo.

function repiteTexto(frase, repeat){
    let fraseRepetida;
    for(let i=0; i<repeat; i++){
        fraseRepetida.push(frase);
    }

    return fraseRepetida;
}

console.log(repiteTexto("Hola",8));