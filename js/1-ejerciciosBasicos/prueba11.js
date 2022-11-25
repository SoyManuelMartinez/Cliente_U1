let nombres = [ 'Pedro', 'Juan' , 'Elena' ] ;
console.log ( nombres.map ( nom => nom.length ) ) ;
                                                     
// Muestra el array con los valores [ 5 , 4 , 5 ]

let sumaNombres = nombres.reduce ( ( acumulador , elemento ) => {
  return acumulador + elemento.length ;
} , 0 ) ;
// Muestra la suma de la longitud de los nombres
console.log (sumaNombres) ;