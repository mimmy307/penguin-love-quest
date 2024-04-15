class Player {
    constructor(gameScreen, left, top, width, height, spriteSrc, numFrames){
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionY = 0;
        this.currentFrame = 0;
        this.numFrames = 4;
        this.element = document.createElement("img");

        this.element.src = imgSrc;
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;

        this.gameScreen.appendChild(this.element)

        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowUp') {
                event.preventDefault();
                this.jump();
            }
        });
    }

    jump(){
        this.directionY = -5; 
    
    }
    move() {
        this.directionY += 0.2;
        this.top += this.directionY;

        if (this.top < 10) {
            this.top = 10;
        }
        if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
            this.top = this.gameScreen.offsetHeight - this.height - 10;
        }

        this.updatePosition();
    }

    updatePosition() {
        this.element.style.top = `${this.top}px`;
    }

    didCollide(obstacle) {
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();

        if (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top
        ) {
            return true;
        } else {
            return false;
        }
    }


}