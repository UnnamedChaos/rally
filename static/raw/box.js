function Box(){
    this.boxWidth = 30;
    this.boxHeight = 30;
    this.posX = width/2;
    this.posY = height/2;
    this.color = 200;
    this.update = function (){

    }
    this.draw = function(){

        fill(this.color);
        rect(this.posX,this.posY,this.boxWidth,this.boxHeight);
    }
    this.mouseClicked = function (){
        if(mouseX > this.posX && mouseX < this.posX + this.boxWidth){
            console.log(mouseY);
            if(mouseY > this.posY && mouseY < this.posY + this.boxHeight){
                this.color = 255 * random();
                var coin = new Coin(this.posX + this.boxWidth/2, this.posY + this.boxHeight/2);
                coins.push(coin);
            }
        }
    }
}