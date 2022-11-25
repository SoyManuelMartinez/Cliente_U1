// 23. Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee
//     igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

//Metodo dar la vuelta
function inverseFrase(frase){
    //lo troceo, le doy la vuelto y lo vuelvo a unir
    return frase.split("").reverse().join("");
}

function compareFrase(frase){

    //Elimino los espacios
    frase = frase.replace(/\s+/g, '');
    //Elimino tildes
    frase = frase.normalize("NFD").replace(/[\u0300-\u036f]/g, "");



    //Genero mis 2 frases
    let frase1=frase;
    let frase2=inverseFrase(frase);
    
    //Ignoro las mayúsculas
    if (frase1.toLowerCase() ===frase2.toLowerCase() ){
        return true;
    }
    else{
        return false;
    }
}



//Alomomola es palindromo
console.log(compareFrase("Alomomola"));

//El tio Paco NO es palindromo
console.log(compareFrase("El tio Paco"));

//A luna ese anula es palindromo
console.log(compareFrase("A luna ese anula"));

//Palíndromo con tildes
console.log(compareFrase("Isaac no ronca así"));
