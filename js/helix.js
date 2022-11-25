const readHelix = (array) => {

    //Primeramente creo una array por la que voy a ir contando
    let arrayHelix = [];
    let arrayNewOrder = [];

    //¡Tenemos que hacer un programa que averigue la ruta del mapa!

    //¡PRIMERAMENTE HAY QUE SABER CUANTOS ELEMENTOS HAT EN LA TABLA!
    let elementos = array.length*array[0].length;
    let counterIntroducedElements = 1;
    let auxArray = [];

    let xRow=0, yColumn=0;

    //Evidentemente siempre empezamos en 0,0
    arrayNewOrder.push([0,0]);
    
    //NO HABREMOS TERMINADO DE LEER LA LISTA HASTA QUE TODOS LOS ELEMENTOS SE HAYAN INTRODUCIDOS
    do {


        //Primero introducimos los valores horizontales
        //VAMOS A LLAMAR A UN METODO QUE NOS CREE UNA ARRAY AUXILIAR DE LA FILA
        //Le tenemos que pasar diferentes parametros:
        // - el maximo elemento que querramos que lea
        // - el sentido
        // - la direccion = horizontal
        // - fila que estamos ahora

        
        
        auxArray=readArray();

        //VAMOS A LLAMAR A UN METODO QUE NOS CREE UNA ARRAY AUXILIAR DE LA COLUMNA
        //Le tenemos que pasar diferentes parametros:
        // - el maximo elemento que querramos que lea
        // - el sentido
        // - la direccion = vertical
        // - columna que estamos ahora

        auxArray=readArray();



        //Vamos a meterle la array auxiliar al orden
        auxArray.forEach(i => {
            arrayNewOrder.push(i);
            //Hemos metido un nuevo elemento, por lo que sumamos 1 al contador
            counterIntroducedElements++;
        })
        //Reseteamos la array auxiliar
        auxArray = [];

        //SENTIDO: derecha (pos), abajo (pos), izquierda (neg), arriba (neg), derecha (pos), abajo (pos), izquierda (neg), arriba (neg), etC

        //MAXIMO VALOR QUE LEER: Cuanto mas nos adentramos, las arrays se acortan más

        //CICLO QUE LLEVAMOS: fila, columna, fila, columna, etc



    }while(counterIntroducedElements!=elementos);


    //A la derecha del todo
    for(let i=0; i<array[0].length; i++){
        arrayNewOrder.push([0,i]);
    }

    //Para abajo
    for(let i=1; i<array.length; i++){
        arrayNewOrder.push([i,array[0].length-1]);
    }

    let auxArrayX = [];

    //Para la izquierda
    for(let i=1; i<array.length; i++){
        auxArrayX.push([array[0].length-1,i]);
    }
    auxArrayX=auxArrayX.reverse();

    auxArrayX.forEach(i => {
        arrayNewOrder.push(i);
    });

    let auxArrayY = [];

    //Para arriba

    for(let i=1; i<array.length-1; i++){
        auxArrayY.push([i,0]);
    }
    auxArrayY=auxArrayY.reverse();

    auxArrayY.forEach(i => {
        arrayNewOrder.push(i);
    })


    //¿Y si creo un bucle que se adapte cada vez a longitud de la array para llamar a metodos y que lo haga de forma automatica?





    console.log(arrayNewOrder);
    
    //¿Y si dependiendo de la lista ya dibujaramos un orden a seguir?
    let arrayOrder = [
        [0,0],
        [0,1],
        [0,2],
        [1,2],
        [2,2],
        [2,1],
        [2,0],
        [1,0],
        [1,1]


    ];

    for(let i=0; i<arrayOrder.length; i++){
        arrayHelix.push(array[arrayOrder[i][0]][arrayOrder[i][1]]);
    }




    return arrayHelix;
}



//Leer array horizontal
const readArray = (maxToRead,sense, dir, currentRowColumn) => {

    let auxArray = [];

    //Haremos una operación diferente dependiendo de la direccion del vector
    //FILAS HORIZONTALES
    if(dir=="x"){
        //Siempre empezamos desde el segundo elemento para no repetir el anterior
        for(let i=1; i<maxToRead; i++){
            auxArray.push([currentRowColumn,i]);
        }

    }
    //COLUMNAS VERTICALES
    else{
        //Siempre empezamos desde el segundo elemento para no repetir el anterior
        for(let i=1; i<maxToRead; i++){
            auxArray.push([i,currentRowColumn]);
        }
    }


    //Si va hacia arriba o hacia la derecha (sentido negativo), le invertimos el orden
    if(sense<0){
        auxArray=auxArray.reverse();
    }

    return auxArray;

}





let tabla = [
    [7,8,9],
    [4,5,6],
    [1,2,3]
];

let tablaChorra = [
    [],
    [],
    [],
    [],
    [],
    []
];

console.log(tabla.length);
console.log(tablaChorra.length);
console.log(readHelix(tabla));