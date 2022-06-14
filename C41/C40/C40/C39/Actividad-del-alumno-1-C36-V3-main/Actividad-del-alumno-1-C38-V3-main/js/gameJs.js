class gameJs {
   constructor(){

   }

   getState(){  //funcion para obtener el estdo del juego
    var gameStateRef = database.ref('gameState')//hace referencia  al gamestate de la base de datos
    gameStateRef.on("value", function(data){gameState = data.val();})//crea al oyente para el gamestate
   }

   update(state){
       //esta funcion es para actualizar la referencia a la base de datos
       database.ref("/").update({gameState:state})
   }

   async start(){
       //esta es la funcion para iniciar el juego
       if(gameState===0){
           player1 = new Player() ; //crea un nuevo objeto para el jugador 
           var playerCountRef = await database.ref('playerCount').once("value");
           if(playerCountRef.exists()){
               playerCount = playerCountRef.val();
               player1.getCount();
           }
           form1 = new Form();//esta creando un nuevo formulario
           form1.display();//manda a llamar al display 
       }
       
       car1 = createSprite(100,200,50,50);
       car2 = createSprite(300,200,50,50);
       car3 = createSprite(500,200,50,50);
       car4 = createSprite(700,200,50,50);
       cars = [car1, car2, car3, car4]

   }

   play(){
       //funcion para empezar a jugar 
       form1.hide();//oculta el formulario cuando estamos en play
       text("Juego iniciado", 120,100)
       Player.getPlayerInfo();//sacar la informacion del jugador
       if(allPlayers!=undefined){
       //    display_position=130;
      var index = 0;
      var x = 0;
      var y 
           for(var plr in allPlayers){
         /*      if(plr==="player"+player1.index)
               fill("red");
               else
               fill("black")

               display_position+=20;
               text(allPlayers[plr].name+": "+allPlayers[plr].distance, 120, display_position) */
           
           index=index+1
           x=x+200
           y=displayHeight-allPlayers[plr].distance
           cars[index-1].x=x
           cars[index-1].y=y

           if(index===player1.index){
               ellipse(70,70,70)
               cars[index-1].shapeColor = "green";
               camera.position.x= displayWidth/2;
               camera.position.y= cars[index-1].y;
           }
           }//Fin for
       }

       if(keyIsDown(UP_ARROW) && player1.index!=null){
           console.log("Auto en Movimiento");
           player1.distance+=50;
           player1.update();
       }
       if(player1.distance>4000){
           gameState = 2;
           player1.rank+=1
           Player.updateCarEnd(player1.rank)
       }
      drawSprites()
   }


   end(){
       console.log("Juego Terminado");  
   }
}
