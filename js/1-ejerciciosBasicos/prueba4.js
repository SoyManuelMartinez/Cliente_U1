//TIPO PRIMITIVO
let a = " hola " ;
let b = a ;
console.log ( a ) ; // hola
console.log ( b ) ; // hola

// TIPOS NO PRIMITIVOS : POR COPIA
let v1 = [ " hola " ] ;
let v2 = v1 ;
v1.push ( " chao " ) ;
console.log ( v2 ) ; // [ ' hola ' , ' chao ' ] I

/*
A pesar que el push 2 solo se le ha hecho a v1, 
v2 está copiando constantemente a v1 y por eso 
también imprime chao
*/

let v1x = [ " hola " ] ;
let v2x = { ... v1 } ;

v1x.push ( " chao " ) ;
console.log ( v1x ) ; // [ ' hola ' , ' chao ' ]
console.log ( v2x ) ; // [ ' hola ' ]

/*
Por el contrario, si queremos que el vector
copia no se actualice cuando el original lo haga
(tenga su propio espacio de memoria y no copie
el original), usamos el spread.

*/