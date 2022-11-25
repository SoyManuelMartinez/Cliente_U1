//7. Mostrar todos los números divisores de un número introducido por el usuario.

//LEE un NUMERO

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

//Almaceno en la lista todos los numeros divisores

//FUNCIÓN CONTAR

function findDivisors(num){
    let arrayNumeros = [];
    let contador=1;

    //Los almacena
    do{
        //COMPROBAR SI ES DIVISOR
        if(num%contador==0){
            arrayNumeros.push(contador);
        }
        contador++;
        

    }while(contador!=((num/2)+1))

    arrayNumeros.push(num);


    //¿Lo mostrará todo de golpe?
    console.log(arrayNumeros);
    
}

let num = readNum();
findDivisors(num);

