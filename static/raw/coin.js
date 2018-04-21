function Coin(x,y){
    this.speed = 5;
    this.drag = 15;
    this.boxWidth = 6;
    this.boxHeight = 6;
    this.posX = x;
    this.posY = y;
    this.color = 200;
    this.rndX = random(2) - 1;
    this.rndY = random(2) - 1;
    this.update = function (){
       
        this.move();
    }
    this.move = function (){
        this.posX += this.speed * this.rndX;
        this.posY += this.speed * this.rndY;
        if(frameCount % this.drag == 0){
            this.speed --;
        }
        if(this.speed < 0){
            this.speed = 0;
        }
    }
    this.draw = function(){
        fill(this.color);
        rect(this.posX,this.posY,this.boxWidth,this.boxHeight);
    }
}