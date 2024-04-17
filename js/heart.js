class Heart{
    constructor(gameScreen, gap){
        this.gameScreen = gameScreen;
        this.width = 100;
        this.height = 100;
        this.left = this.gameScreen.offsetWidth + gap;
        this.top = 550
        this.element = document.createElement("img");
        this.element.src = "./images/heart1.svg";
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
    }
}