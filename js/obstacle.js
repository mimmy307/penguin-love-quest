class Obstacle{
    constructor(gameScreen, gap, score){
        this.gameScreen = gameScreen;
        this.width = 120;
        this.height = 150;
        this.left = this.gameScreen.offsetWidth + gap;
        this.top = 525
        this.score = score
      
        this.element = document.createElement("img");
        this.element.src = "./images/Obstacles/EvilSnowman1.png";
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        
        this.gameScreen.appendChild(this.element);

    }

    move(){
        if (this.score > 7) {
            this.left -= 6; 
        } else if (this.score > 5) {
            this.left -= 5; 
        } else if (this.score > 3) {
            this.left -= 4; 
        } else if(this.score <= 3){
            this.left -= 3; 
        }
    this.updatePosition();
    }

    updatePosition(){
    this.element.style.left = `${this.left}px`;
    }

}