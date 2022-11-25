// 8. Mostrar la tabla de multiplicar de un número introducido por pantalla.

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

let num = readNum();

for(i=0; i<11; i++){
    console.log(num*i);
}