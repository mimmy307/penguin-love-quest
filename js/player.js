class Player {
    constructor(gameScreen, left, top, width, height, imgSrc){
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.jumpStrength = 250;
        this.gravity = 5;
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
            } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'ArrowDown') {
            event.preventDefault();
    
        }
        });
    }

    jump(){
        const jumpLimit = 300;
        if(this.top > jumpLimit){
        this.top -= this.jumpStrength;
        }
      }
    
    move() {
        if (this.top < this.gameScreen.offsetHeight - this.height - 60) {
            this.top += this.gravity;
        }
        if (this.top > this.gameScreen.offsetHeight - this.height - 60) {
            this.top = this.gameScreen.offsetHeight - this.height - 60;
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

   heartCollect(heart) {
        const playerRect = this.element.getBoundingClientRect();
        const heartRect = heart.element.getBoundingClientRect();

        if (
            playerRect.left < heartRect.right &&
            playerRect.right > heartRect.left &&
            playerRect.top < heartRect.bottom &&
            playerRect.bottom > heartRect.top
        ) {
            return true;
        } else {
            return false;
        }
    }




}