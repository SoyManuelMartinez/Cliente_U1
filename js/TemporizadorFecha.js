// 10. TEMPORIZADOR FECHA
// Realiza un programa que pasados 20 segundos, nos muestre una sola vez la fecha actual del sistema.

printDate = () => {
    //Defino una fecha que sea la actual
    const fecha = new Date();
    console.log(fecha.toLocaleTimeString());
}

let timeInterval = 1000*1;
intervaloFecha=setInterval(printDate, timeInterval);