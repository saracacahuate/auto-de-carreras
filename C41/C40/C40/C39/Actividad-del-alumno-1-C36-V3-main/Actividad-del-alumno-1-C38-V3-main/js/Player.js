class Player{
  constructor(){
   this.index = null; // esa nos va a servir para identificar el nuevo jugador
   this.distance = 0; //distancia recorrida
   this.name = null; //para guardar el nombre del nuevo jugador
   this.rank = null; //es para saber donde van a caer los jugadores
  }
   
  getCount(){ //es para obtener el player count 
      var playerCountRef = database.ref('playerCount'); // obtiene la referencia del player count para la base de datos
      playerCountRef.on("value",(data)=>{playerCount = data.val()}); //crea el oyente para los cambios del playercount en la base de datios  
    }

    updateCount(count){
        database.ref("/").update({playerCount:count}); //es para actualizar el player count en la base de datos
    }

    update(){ // esta funcion actualiza la distancia y nombre del jugador 
        var playerIndex = "players/player"+ this.index //es para que identifique a los jugadores 
        database.ref(playerIndex).set({name:this.name, distance:this.distance }); 
      }
    
    static getPlayerInfo(){
        var playerInfoRef = database.ref ('players');
        playerInfoRef.on("value",(data)=>{allplayers = data.val()});
    }

    getCarsEnd(){
      database.ref("carEnd").on("value",(data)=>{
        this.rank = data.val();
      })
    }
   static updateCarEnd(rank){
     database.ref('/').update({
      carEnd:rank
     })
   }

}
