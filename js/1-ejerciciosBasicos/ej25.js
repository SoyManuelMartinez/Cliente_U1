// Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en
//     un sentido que en otro), pe. miFuncion(2002) devolverá true.

//Metodo dar la vuelta
const inverseFrase = frase =>  frase.split("").reverse().join("");
    //lo troceo, le doy la vuelto y lo vuelvo a unir
   


function compareFrase(num){

    let frase = num.toString();
    let frase2= inverseFrase(frase);


    
    //Compruebo que el numero al reves sea igual que el normal
    return (frase ===frase2) ?  true : false;

    
}



//2010 no es capicuo
console.log(compareFrase(2010));
//2002 es capicuo
console.log(compareFrase(2002));


