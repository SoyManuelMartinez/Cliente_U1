// 22. Programa una función para contar el número de veces que se repite una palabra en un texto
// largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.


function repeatedCharacter(frase, char){
    let contador =0;
    for(let i=0; i<frase.length; i++){

        if(frase.charAt(i)===char){
            contador++;
        }

    }
        
    return contador;
}

console.log(repeatedCharacter("mamasia","a"));