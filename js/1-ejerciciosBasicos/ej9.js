// 9. Realizar una pequeña calculadora, donde el programa solicite dos números y una operación
// aritmética simple (+,-,*,/). El programa debe validar que los datos introducidos por el usuario
// son correctos. Si no lo son, solicitarlos de nuevo, si lo son, mostrar el resultado.

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

//Leer simbolo

function readSymbol(num1,num2){

   let symbol;

   symbol=prompt(`1 - SUMAR
   2 - RESTAR
   3 - MULTIPLICAR
   4 - DIVIDIR
   =================
   Introduzca una opción`, 1);
   symbol = parseInt(symbol);

   let resultado;

   switch(symbol){
    case 1:
        resultado=num1+num2;
        alert(`${num1} + ${num2} = ${resultado}`);
        break;
    case 2:
        resultado=num1-num2;
        alert(`${num1} - ${num2} = ${resultado}`);
        break;
    case 3:
        resultado=num1*num2;
        alert(`${num1} * ${num2} = ${resultado}`);
        break;
    case 4:
        try{
            if(num2==0){
                throw new Error (`¡NO DIVIDAS POR 0!`);
            }
            resultado=num1/num2;
            alert(`${num1} / ${num2} = ${resultado}`);
        }catch(errorDivideByZero){
            alert(`${errorDivideByZero}`);
        }
        break;

   }

}



let num1 = readNum();
let num2 = readNum();
readSymbol(num1,num2);