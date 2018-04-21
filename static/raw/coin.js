function Coin(x,y){
    this.speed = 5;
    this.drag = 15;
    this.size = Math.floor(random(6)) + 6
    this.boxWidth = this.size;
    this.boxHeight = this.size;
    this.posX = x;
    this.posY = y;
    this.color = 200;
    this.rndX = random(2) - 1;
    this.rndY = random(2) - 1;
    this.value = Math.floor(random(this.size)) + 1;
    this.color = color(random(255),random(255),random(255));
    this.update = function (){
        this.collect();
        this.move();
    }
    this.collect = function(){

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
        stroke(255);
        fill(this.color);
        rect(this.posX,this.posY,this.boxWidth,this.boxHeight);
    }
}