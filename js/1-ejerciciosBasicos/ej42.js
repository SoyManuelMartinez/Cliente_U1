// 42. Programa una clase llamada Pelicula.
// La clase recibirá un objeto al momento de instanciarse con los siguientes datos: id de la película
// en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
// - Todos los datos del objeto son obligatorios.
// - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
// - Valida que el título no rebase los 100 caracteres.
// - Valida que el director no rebase los 50 caracteres.
// - Valida que el año de estreno sea un número entero de 4 dígitos.
// - Valida que el país o paises sea introducidos en forma de arreglo.
// - Valida que los géneros sean introducidos en forma de arreglo.
// - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
// - Crea un método estático que devuelva los géneros aceptados*.
// - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
// - Crea un método que devuelva toda la ficha técnica de la película.
// - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma
// automatizada e imprime la ficha técnica de cada película.

class Pelicula {
    constructor(id, titulo, director, estreno, pais, genero, calificacion){
        this.id = id;
        this.titulo=titulo;
        this.director=director;
        this.estreno=estreno;
        this.pais=pais;
        this.genero=genero;
        this.calificacion=calificacion;

    }

    validateIMDB = () =>{
        let regexp = new RegExp(/[a-zA-Z]{2}[0-9]{7}/);
        //Si el id cumple la expresión regular, la devuelve. Si no, la pasa vacía
        regexp.test(this.id) ? id : "";

    }
}

