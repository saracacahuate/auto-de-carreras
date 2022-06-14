var database;
var gameState = 0;
var playerCount = 0;
var player1,game1;
var form1;
var allPlayers;
var display_position;
var distance = 0;
var Canvas;
var car1,car2,car3,car4,cars;



function setup() {
  Canvas = createCanvas(displayWidth-20,displayHeight-30)
  database = firebase.database(); //creando una base de datos en firebase 
  game1 = new gameJs();
  game1.getState();//para el estado del juego si saber si estamos jugando o estamos esperando a los jugadores
  game1.start();//para que inicie el juego

}

function draw() {
  background("green")
  if(playerCount===4){ // es para saber cuantos jugadores estan registrados
    game1.update(1); //es para que actualize el juego al tener a 1 al tener a los 4 jugadores
     }
  if(gameState===1){
    game1.play();//es para empezar a jugar 
  }
  if(gameState===2){
    game1.end();//es para finalizar el juego
  }
}

