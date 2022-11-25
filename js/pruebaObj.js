const producto = {
    nombre: 'manazana',
    categoria: 'fruta',
    precio: 1.99,
    nutrientes : {
        carbs: 0.95,
        grasas: 0.3,
        proteina: 0.2
    }
    

}

let ejemplo=producto["nutrientes"].proteina;

console.log(ejemplo);
