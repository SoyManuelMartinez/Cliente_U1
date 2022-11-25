/*
1. Dados dos números indicar cuál es mayor, menor o si son iguales.
*/

let num1, num2;

num1 = prompt ( "Introduzca el primer valor " , 1 ) ;
num2 = prompt ( "Introduzca el segundo valor " , 1 ) ;

if (num1>num2){
    alert(`${num1} es el número más grande`);
}
else if (num2>num1){
    alert(`${num2} es el número más grande`);
}
else {
    alert(`Ambos números son iguales`);
}