// 12 Programa una función que calcule el factorial de un número (El factorial de un entero positivo
//     n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe.
//     miFuncion(5) devolverá 120.

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

//Factorial recursivo

function factorial(num){
    if(num!==0){
        return (num*factorial(num-1));
    }
    else{
        return 1;
    }
}

let num = readNum();
console.log(factorial(num));