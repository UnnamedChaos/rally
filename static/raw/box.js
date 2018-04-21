function Box(){
    this.boxWidth = 30;
    this.boxHeight = 30;
    this.posX = width/2;
    this.posY = height/2;
    this.color = 200;
    this.util = new Utility();
    this.update = function (){

    }
    this.draw = function(){

        fill(this.color);
        rect(this.posX,this.posY,this.boxWidth,this.boxHeight);
    }
    this.spawn = function(){
        this.color = 255 * random();
        var coin = new Coin(this.posX + this.boxWidth/2, this.posY + this.boxHeight/2);
        coins.push(coin);
    }
    this.mouseClicked = function (){
        if(this.util.over(mouseX,mouseY,this.posX,this.posY,this.boxWidth,this.boxHeight,0,0)){
           this.spawn();
        }
    }
}