/*
2. Modifica el programa anterior: si los números no son un número o son menores o iguales a
ceros, que los vuelva a pedir.
*/

let num1, num2;

//FUNCIÓN CHECKEA LEER Y CHECKEAR VALOR

function readNumber(){
    let readNum, num;
    
    do{
        //Lee un numero y lo pasa a una variable numerica
        readNum = prompt ( "Introduzca un valor " , 1 ) ;
        num = parseInt(readNum);

        //Si es menor igual 0 o NO NUMERO le reprocha
        if(num<=0 || isNaN(num)===true){
            alert(`${num1} NO ES VÁLIDO >:C`);
        }
    }while(num<=0 || isNaN(num)===true) 

    return num;
}

num1=readNumber();
num2=readNumber();


if (num1>num2){
    alert(`${num1} es el número más grande`);
}
else if (num2>num1){
    alert(`${num2} es el número más grande`);
}
else {
    alert(`Ambos números son iguales`);
}