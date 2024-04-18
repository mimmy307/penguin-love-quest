class Heart{
    constructor(gameScreen, gap){
        this.gameScreen = gameScreen;
        this.width = 30;
        this.height = 30;
        this.left = this.gameScreen.offsetWidth + gap;
        
        const minTop = 350; 
        const maxTop = 550;
        this.top = Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop;

        this.element = document.createElement("img");
        this.element.src = "../images/heart1.png";
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