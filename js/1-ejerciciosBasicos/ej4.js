// Utilizando un bucle, mostrar la suma, el producto y la media de los números introducidos
// hasta introducir un número negativo y entonces mostrar el resultado.

//Función obtener numero

//FUNCIÓN CHECKEA LEER Y CHECKEAR VALOR

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



let newNumber,suma=0,product=1,media,contador=0;

let arrayNumeros = [];

//Entramos en bucle
do{
    //Primero pedimos un valor
    newNumber=readNum();
    //y lo almacenamos en la array si no es negativo
    if(newNumber>0){
        //No se si funcionará porque no he declarado la longitud de la lista. Si fuera una arraylist podría elongarla infinitamente
        //Actualización: ¡Lo hace!
        arrayNumeros[contador]=newNumber;
        contador++;
    }
}while(newNumber>0)

//Ha introducido un valor negativo y toca mostrar resultados

//OPERA SUMA
for(i=0; i<arrayNumeros.length; i++){
    suma+=arrayNumeros[i];
}

//OPERACIÓN MULTIPLICAR
for(i=0; i<arrayNumeros.length; i++){
    product*=arrayNumeros[i];
}

//OPERACIÓN MEDIA
media = suma/contador;

//LOS MOSTRAMOS
alert(`LA SUMA ES ${suma} \n
EL PRODUCTO ES ${product} \n
Y LA MEDIA ES ${media}`);

//Las listas en Javascript ya por defecto son resizeable





