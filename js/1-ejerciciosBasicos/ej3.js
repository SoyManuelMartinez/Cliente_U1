// 3. Dada una hora en horas, minutos y segundos, indicar qué hora será pasado un segundo.

let hour, minutes, seconds;

//FUNCIÓN CHECKEA LEER Y CHECKEAR VALOR

function readTime(maximo, tipoTiempo){
    let readNum, num;
    
    do{
        //Lee un numero y lo pasa a una variable numerica
        readNum = prompt (`Introduzca los ${tipoTiempo} ` , 0 ) ;
        num = parseInt(readNum);

        //Si es menor 0 
        if(num<0){
            alert(`${tipoTiempo} NO PUEDE SER MENOR QUE 0 >:C`);
        }
        //Si es meyor que 60
        if(num>=maximo){
            alert(`${tipoTiempo} NO PUEDE SER MAYOR QUE ${maximo} >:C`);
        }
        //Si no es un valor numerico
        if(isNaN(num)===true){
            alert(`${readNum} TIENE QUE SER UN NUMERO >:C`);
        }

        

    }while(num<0 || num>=maximo || isNaN(num)===true) 

    return num;
}

//OPERADORA DE TIEMPO

function calculateTiempo(seconds,minutes,hour,secondsAdded){
    let carry=0;

    seconds+=secondsAdded;

    //LLAMAMOS a la funcion setTime para que calcule el tiempo. 
    //Le paso de parámetros el tiempo actual y el máximo del tipo
    //Almaceno los nuevos segundos y el nuevo carry
    [seconds,carry]=setTime(seconds,60);


    minutes+=carry;
    carry=0;

    [minutes,carry]=setTime(minutes,60);


    hour+=carry;
    carry=0;

    [hour,carry]=setTime(hour,24);


    //IMPRIME POR PANTALLA LA NUEVA HORA
    alert(`Dentro de ${secondsAdded} segundos serán las ${hour} : ${minutes} : ${seconds}`)

}

//Calcula el tiempo
function setTime(time, max){
    let carry=0;

    do{
        if(time>=max){
            //Si tiene muchos segundos, el carry se incrementa
            time-=max;
            carry++;
        }
    }while(time>=max)

    //necesito hacer el return de 2 valores, time y carry. Lo puedo hacer por una lista o por un objeto
    return [time, carry];
}

seconds=readTime(60, "segundos");
minutes=readTime(60, "minutos");
hour=readTime(24, "horas");

//ENSEÑA LA HORA DE AHORA
alert(`Actualmente son las ${hour} : ${minutes} : ${seconds}`)

calculateTiempo(seconds,minutes,hour,1);

//Si lo deseas, puedes hacer que el tiempo puede cambiar