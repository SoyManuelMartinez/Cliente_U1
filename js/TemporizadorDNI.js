const askDni = () => {

    let value = prompt("DAME UN DNI ");

    if(value!=-1){
        if(checkIsDni(value.toUpperCase())){
            dniArray.push(value);
        }
    }
    else{
        stopAsk();
    }


}

const checkIsDni = (dni) => {

    let regexp = new RegExp(/^(\d{8})([ABCDEFGHJKLMNPQRSUVW])$/);
    //Si el valor dado es un dni lo devuelve. Sino, palabra vacia
    if(regexp.test(dni)){
        return true;
    }
    else{
        return false;
    }
}

const stopAsk = () => clearInterval(intervaloDNI);


//Cada 20 segundos llama a la función y almacena el resultado

let dniArray = [];

intervaloDNI=setInterval(askDni, 20000);
console.log(dniArray);