class Obstacle{
    constructor(gameScreen, gap){
        this.gameScreen = gameScreen;
        this.width = 120;
        this.height = 150;
        this.left = this.gameScreen.offsetWidth + gap;
        this.top = 525
      
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
    this.left -= 3;
    this.updatePosition();
    }

    updatePosition(){
    this.element.style.left = `${this.left}px`;
    // this.element.style.top = `${this.top}px
    }

}