//Par impar recuriva

//Sentencia arrow (la odio)

isPar = (num) => {
    if (num===0){
        return console.log(`ES PAR`);
    }
    else{
        isImpar(num-1);
    }

}

isImpar = (num) => {
    if (num===0){
       return console.log(`ES IMPAR`);
    }
    else{
       isPar(num-1);
    }
}


let num = isPar(11);
