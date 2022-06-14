class Form{
    constructor(){
        this.input = createInput("Nombre");
        this.button = createButton("Play");
        this.greeting = createElement("h3");
        this.title = createElement("h2");
    }

    hide(){
       this.input.hide();
       this.button.hide();
       this.greeting.hide();
       this.title.hide();
        
    }


    display(){
    
        
        this.title.html("Juego de carreras multijugador");
        this.title.position(130,10);
        
        this.input.position(130,60);
        this.button.position(250,200);

       this.button.mousePressed( ()=>{
         this.input.hide();
         this.button.hide();
         player1.name = this.input.value();
         playerCount+=1;
         player1.index = playerCount;
         console.log("numero de jugador: " , playerCount)
         player1.update();
         player1.updateCount(playerCount);

         this.greeting.html("Bienvenido "+ player1.name);
         this.greeting.position(130,50);
       
       
          

          
    })
    }
}