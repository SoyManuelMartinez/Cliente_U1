// 31. Programa una función que dada una fecha válida determine cuantos años han pasado hasta
// el día de hoy, pe. miFuncion(new Date(1984,4,23)) o miFuncion (“01/12/2010”)

const yearsDifference = fecha => {
    //La fecha actual - la fecha que le he pasado
    const currentDay = new Date();
    //le paso el valor en absoluto (positivo)
    return Math.abs(currentDay.getFullYear()-fecha.getFullYear());
};

//Ejemplos
const diaMalo =new Date ('2001-09-11');
const diaBueno = new Date ('2002-02-18');
const diaTonto = new Date ('1970-02-18');



console.log(yearsDifference(diaMalo));
console.log(yearsDifference(diaBueno));
console.log(yearsDifference(diaTonto));

