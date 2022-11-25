// 26 . Comprueba que una cadena empieza con las letras “m” o “d” y además termina con las letras
// “a” o “o”. Realiza el ejercicio con funciones de cadena y con expresiones regulares.

function checkValid(frase){


    const r = /^[md].*[ao]/;

    return document.write(r.test(frase));

}

console.log(checkValid("mano"));
console.log(checkValid("mama"));
console.log(checkValid("dopa"));
console.log(checkValid("domo"));
console.log(checkValid("ramo"));