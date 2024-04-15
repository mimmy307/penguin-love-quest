class Game {
    constructor(){
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.endScreen = document.getElementById("game-end");
        this.player = new Player(
            this.gameScreen,
            50,
            550,
            130,
            130,
            "./images/icon_penguin.png"
          );
        // this.height = 800; //come back later to adjust 
        // this.width = 1000; //come back later to adjust 
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
        this.gameIntervalId;
        this.gameLoopFrequency = Math.round(1000/60);
    }

    start(){
        // this.gameScreen.style.height = `${this.height}px`;
        // this.gameScreen.style.width = `${this.width}px`; 
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        this.gameIntervalId = setInterval(() => {
            this.gameLoop()
          }, this.gameLoopFrequency)
    }

    gameLoop(){
        console.log("in the game loop");
          
        this.update();
        
        if (this.gameIsOver) {
            clearInterval(this.gameIntervalId)
          }
    }

    update(){
        this.player.move();

    }

}