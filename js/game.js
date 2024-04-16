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
                i--; 
            } 
            else if(obstacle.top > this.height){
                obstacle.element.remove();
                this.obstacles.splice(i, 1);
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
            } 
        }

        if (this.lives === 0 || this.score === 10) {
            this.endGame();
        }

        if (Math.random() > 0.98 && this.obstacles.length < 1) {
            this.createObstacle();
        }

        this.createHeart();
    
    }

    endGame() {
        this.player.element.remove();
        this.obstacles.forEach(obstacle => obstacle.element.remove());

        this.gameIsOver = true;

        this.gameScreen.style.display = "none";
        this.gameEndScreen.style.display = "block";
    }


    createObstacle(){
        const obstacleImages = ["./images/Obstacles/iceSpike.png", "./images/Obstacles/treeLog.png", "./images/Obstacles/Snowman.png"];
        const randomImageIndex = Math.floor(Math.random() * obstacleImages.length);
        const obstacleTop = 600;
        const obstacle = new Obstacle(this.gameScreen, this.gameScreen.offsetWidth, obstacleTop, obstacleImages[randomImageIndex]);
        this.obstacles.push(obstacle);
    }

    createHeart(){
        if (Math.random() > 0.98 && this.heart.length < 1)  {
            const heart = new Heart(this.gameScreen);
            this.heart.push(heart);

    }
    

}
}