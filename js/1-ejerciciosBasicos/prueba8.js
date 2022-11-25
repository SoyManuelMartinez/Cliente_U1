//Mensaje normla
console.log("Hola");
//Mensaje rojo
console.error("¡Error! D:");

//Cuanto tarda en ejecutarse de entrada a cierre

console.time('Apertura 1')

const arreglo = new Array(100000);
for (let i=0; i<arreglo.length; i++){
    arreglo[i]=i;
}

console.timeEnd('Apertura 1')