
//Manuel Martínez Ruiz

// Realiza un programa para implementar el juego de Piedra, Papel y Tijera en el modo de un jugador contra otro.
// La entrada de datos se realizará mediante prompt y ganará la partida aquel jugador que gane tres jugadas 
// (si empatan en una jugada gana nadie) y el programa terminará mostrando un resumen de la partida.
// Después de cada jugada debes mostrar una alerta con información sobre: número de jugadas, jugadas ganadas 
// por J1, jugadas ganadas por J2 y jugadas empatadas y quien ha ganado o empatado la jugada.

//FUNCIÓN LEER ENTRADA

const readString = () => {

    let respuesta = prompt("¿Piedra papel o tijeras?");

    //La converto a minúsculas para evitar inconvenientes y entradas que no las identifique
    respuesta = respuesta.toLocaleLowerCase();

    return respuesta;
};

//FUNCION MOSTRAR RESULTADO
const showResults = (player1Choice, player2Choice, player1Score, player2Score, drawMatches, timesPlayed, message) => {


    //La partida ha terminado
    if(3<=player1Score || 3<=player2Score){
        let winner;
        //Ha ganado el jugador1
        if(player1Score>player2Score){
            winner="JG1"
        }
        //Ha ganado el jugador2
        else{
            winner="JG2"
        }
            alert(`FIN DE LA PARTIDA \n
=======================
${winner} GANA
=======================
PARTIDAS JUGADAS: ${timesPlayed} \n
PUNTAJE JG1: ${player1Score} \n
PUNTAJE JG2: ${player2Score} \n
EMPATES:  ${drawMatches} \n
=======================
${player1Choice} VS ${player2Choice}\n
${message}
                `);
        

    }
    else{
        alert(`PARTIDAS JUGADAS: ${timesPlayed} \n
PUNTAJE JG1: ${player1Score} \n
PUNTAJE JG2: ${player2Score} \n
EMPATES:  ${drawMatches} \n
=======================
${player1Choice} VS ${player2Choice}\n
${message}
    `);
    }

}



//PUNTAJE DE LOS JUGADORES
let player1Score=0, player2Score=0, drawMatches=0;
let player1Choice, player2Choice;
let timesPlayed=0;
let message;
let gameContinue=true;

//Entramos en un bucle hasta que uno de los jugadores gane
//GAMEPLAY LOOP
do{
    //Incrementamos el numero de partidas
    timesPlayed++;
    //Preguntamos al jugador 1
    player1Choice=readString();
    //Preguntamos al jugador 2
    player2Choice=readString();

    //Hay que definir quien ha ganado

    //Empate
    if(player1Choice===player2Choice){
        drawMatches++;
        message=`¡EMPATE!`;
    }
    //Gana el jugador 1
    if((player1Choice==='piedra' && player2Choice==='tijeras') || 
    (player1Choice==='papel' && player2Choice==='piedra') ||
    (player1Choice==='tijeras' && player2Choice==='papel')){
        //Aumento su puntaje y digo que ha ganado él
        player1Score++;
        message=`¡Punto para el JG1!`;
    }
    //Gana el jugador 2
    if((player2Choice==='piedra' && player1Choice==='tijeras') || 
    (player2Choice==='papel' && player1Choice==='piedra') ||
    (player2Choice==='tijeras' && player1Choice==='papel')){
        //Aumento su puntaje y digo que ha ganado él
        player2Score++;
        message=`¡Punto para el JG2!`;
    }


    //Muestro el resultado
    showResults(player1Choice, player2Choice, player1Score, player2Score, drawMatches, timesPlayed, message);

    //Comprueba que la partida se ha terminado
    if(3<=player1Score || 3<=player2Score){
        gameContinue=false;
    }

}while(gameContinue)




