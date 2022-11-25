
// 5. Mostrar todos los números que hay entre dos números introducidos por el usuario.

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

//Almaceno en la lista todos los numeros entre medias

//FUNCIÓN CONTAR

function contarNumeros(numMayor, numMenor){
    let arrayNumeros = [];
    let contador=0;

    //Los almacena
    do{
        arrayNumeros[contador]=(numMenor+contador);
        //alert(`${arrayNumeros[contador]}`);
        contador++;

    }while(contador!=(numMayor-numMenor))

    //LO IDEAL sería implementar que el alert leyera toda la array de una sola sentada

    //¿Lo mostrará todo de golpe?
    console.log(arrayNumeros);
    
}

let num1,num2;


//Leo los numeros
num1=readNum();
num2=readNum();

//Detecto cuál de los dos es el mas grande

if (num1>num2){
    contarNumeros(num1,num2);
}
else if (num2>num1){
    contarNumeros(num2,num1);
}
else {
    alert(`Ambos números son iguales`);
}

