let balls = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);
    
    for (let i = 0; i < balls.length; i++) {
        balls[i].drawCircles();
    }
}

function mouseClicked() {
    balls.push(new Ball(mouseX, mouseY));
}

class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = random(50, 100);
        this.randomX = random(0, 3);
        this.randomY = random(0, 3);
    }
    
    drawCircles() {
        strokeWeight(.8);
        fill(`rgba(255, 0, 255,.5)`);
        circle(this.x, this.y, this.r);
        for(let i = 0; i < balls.length; i++){
            if (this.x < 0 || this.x > windowWidth) {
                this.randomX *= -1;
            }
            if (this.y < 0 || this.y > windowHeight) {
                this.randomY *= -1;
            }
        }
        this.x += this.randomX;
        this.y += this.randomY;
    }
}
