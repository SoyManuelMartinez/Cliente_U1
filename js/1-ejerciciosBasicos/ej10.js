// 10. Programa una función que determine si un número es primo (aquel que solo es divisible por
//     sí mismo y 1) o no, pe. miFuncion(7) devolverá true

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

function isPrime(num){
    //asignar maximo
    let max = num/2;
    for(let i=2; i <= max, i++;){
        //No es primo
        if(num%i==0){
            return false;
            break;
        }
    }
    //Es primo
    return true;
}

let num = readNum();