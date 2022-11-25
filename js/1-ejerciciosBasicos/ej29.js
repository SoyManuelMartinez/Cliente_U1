/*
29. Programa una función para convertir números de base binaria a decimal y viceversa, pe.
miFuncion(100,2) devolverá 4 base 10
*/

// program to convert decimal to binary
function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(`${x} en binario es: ${bin}`);
}

