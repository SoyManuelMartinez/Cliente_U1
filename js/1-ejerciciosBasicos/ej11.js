// //11. Programa una función que determine si un número es par o impar, pe. miFuncion(29)
// devolverá Impar.

// LEER NUMEROs

function readNum(){
    let readNum, num;
    
    do{
        //Lee un numero y lo pasa a una variable numerica
        readNum = prompt (`Introduzca un valor ` , 0 ) ;
        num = parseInt(readNum);

        //Si no es un valor numerico
        if(isNaN(num)===true){
            alert(`${readNum} TIENE QUE SER UN NUMERO >:C`);
        }

        

    }while(isNaN(num)===true) 

    return num;
}

//Función detecta si es par o impar
//No estoy usando la sintaxis arrow <=

function isPar(num){
    if (num%2==0){
        return "par";
    }
    else{
        return "impar";
    }
    
    
}

//Captura un error si el número introducido es 0 

try{
    let num = readNum();
    if(num===0){
        throw new Error (`¡0 no es puede categorizarse!`);
    }
    console.log(`${num} es ${isPar(num)}`);

}catch(zeroNonPar){
    alert(`${zeroNonPar}`);
}



