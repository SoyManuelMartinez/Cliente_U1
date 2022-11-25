//Funcion recibe
const readInputTile = (ticTacToe,player) => {

    let tileSelected;
    let validAnswer=true;
    let board = createBoard(ticTacToe);

    //Lee la respuesta del jugador. Si no es válida, le obliga a repetir
    do{


        //Si el jugador que va a introducir el dato es el jugador 1, lo leo
        if(player==1){
            tileSelected = parseInt(window.prompt(`${board} \n\n Selecciona una casilla`));
        }
        //Si el jugador que va a introducir el dato es el jugador 2, lo genero random
        else if(player==2){
            tileSelected = Math.floor(Math.random() * 9);
        }
        

        //La casilla que ha escogido ya está ocupada o no existe
        if(ticTacToe[tileSelected]!=0 || ticTacToe[tileSelected]==null){
            //Si es el jugador 1, le echo la bronca
            if(player==1){
                alert(`La casilla ${tileSelected} no es valida`);
            }
            validAnswer=false;
        }
        //La casilla es valida
        else{
            validAnswer=true;
        }

    }while(!validAnswer);
    

    //Modifico la casilla escogida
    ticTacToe[tileSelected]=player;

    return ticTacToe;
}

//Crear tablero
const createBoard = (ticTacToe) => {

    let board = "";
    //Simbolos que dibujara
    let symbols = [" ", "X", "O"];

    for(let i=0; i<ticTacToe.length; i++){

        board+=(`${i}: ${symbols[ticTacToe[i]]} \t`);

        if((i+1)%3==0){
            board+=(`\n`);
        }
    }

    return board;
}


//¿Ha ganado?
const checkWin = (ticTacToe) => {

    let winner=0;

    //Comprobamos que todas las posibles combinaciones


    for(let i=0; i<3; i++){

        //Horizontals
        if(ticTacToe[0+(3*i)]==ticTacToe[1+(3*i)] && ticTacToe[0+(3*i)]==ticTacToe[2+(3*i)] && ticTacToe[1+(3*i)]==ticTacToe[2+(3*i)] && ticTacToe[0+(3*i)]!=0){
            winner=ticTacToe[0+(3*i)];
        }
        //Verticales
        if(ticTacToe[0+i]==ticTacToe[3+i] && ticTacToe[0+i]==ticTacToe[6+i] && ticTacToe[3+i]==ticTacToe[6+i] && ticTacToe[0+i]!=0){
            winner=ticTacToe[0+i];
        }

    }

    //Diagonales
    //048
    if(ticTacToe[0]==ticTacToe[4] && ticTacToe[0]==ticTacToe[8] && ticTacToe[4]==ticTacToe[8] && ticTacToe[0]!=0){
    winner=ticTacToe[0];
    }
    //246
    if(ticTacToe[2]==ticTacToe[4] && ticTacToe[2]==ticTacToe[6] && ticTacToe[4]==ticTacToe[6]&& ticTacToe[2]!=0){
         winner=ticTacToe[2];
    }



    return winner;

}


// Definir mapa TicTacToe
let ticTacToe = [
    0,0,0,
    0,0,0,
    0,0,0];


//Bucle de ciclo jugable
 let gameFinish = false;
 let winner, turns=0;

 do{

    //TURNO JUGADOR 1
    ticTacToe=readInputTile(ticTacToe,1);

    //Comprobamos que haya ganado alguien
    winner=checkWin(ticTacToe);
    if(winner!==0){
        //Terminamos el juego
        gameFinish=true;
    }



    else{
        //TURNO JUGADOR 2
        ticTacToe=readInputTile(ticTacToe,2);
    }

    ////Comprobamos que haya ganado alguien
    winner=checkWin(ticTacToe);
    if(winner!==0){
        //Terminamos el juego
        gameFinish=true;
    }

    //Han pasado 9 turnos
    if(turns>=7){
        gameFinish==true;
    }

    turns++;

    

 }
 while (!gameFinish);

if(turns<8){
    alert(`${createBoard(ticTacToe)} \n\n ¡EL JUGADOR ${winner} HA GANADO!`);
}
else{
    alert(`${createBoard(ticTacToe)} \n\n EMPATE...`);
}

//Manuel Martínez Ruiz