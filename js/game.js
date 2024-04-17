class Game {
    constructor(){
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.endScreen = document.getElementById("game-end");
        this.livesElement = document.querySelector("#lives");
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
        this.heart = []
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
        for (let i = 0; i < this.obstacles.length; i++) {
            const obstacle = this.obstacles[i];
            obstacle.move();

            if (this.player.didCollide(obstacle)) {
                obstacle.element.remove();
                this.obstacles.splice(i, 1); 
                this.lives--; 
                this.livesElement.innerText = this.lives
                i--; 
            
        }
    }

        for (let i = 0; i < this.heart.length; i++) {
            const heart = this.heart[i];
            heart.move();

            if (this.player.heartCollect(heart)) {
                heart.element.remove();
                this.heart.splice(i, 1); 
                this.score++; 
                i--; 
                this.updateScoreBar();
            } 
        }

        if (Math.random() > 0.98 && this.obstacles.length < 2) {
            const obstacleGap = Math.floor(Math.random() * 300) + 200;
            this.obstacles.push(new Obstacle(this.gameScreen, obstacleGap))
        }

        if (Math.random() > 0.98 && this.heart.length < 2)  {
            const heartGap = Math.floor(Math.random() * 300) + 200;
            this.heart.push(new Heart(this.gameScreen, heartGap));
        }

        if (this.lives === 0 || this.score === 10) {
            this.endGame();
        }
    }

    updateScoreBar(){
        const scoreBarImg = document.querySelector(".score-img");
        const scoreBarNumber = Math.min(this.score, 10);
        scoreBarImg.src = `images/Score Bar/${scoreBarNumber}.svg`
    }

    endGame() {
        this.player.element.remove();
        this.obstacles.forEach(obstacle => obstacle.element.remove());
        this.heart.forEach(heart => heart.element.remove());

        this.gameIsOver = true;

        this.gameScreen.style.display = "none";
        this.gameEndScreen.style.display = "block";
    }
    

}