function Car(){
    this.speed = 2;
    this.side = 20;
    this.y = height - this.side * 2 - 10;
    this.x = width / 2 - this.side / 2;
    this.color = color(255);
    this.update = function(){
        if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
            this.x -= this.speed;
        } else if (keyIsDown(RIGHT_ARROW)|| keyIsDown(68)) {
            this.x += this.speed;
        }
        if(mouseIsPressed){
            if(mouseX < width/2){
                this.x -= this.speed;
            }
            else{
                this.x += this.speed;
            }
        }
    }
    this.draw = function(){
        noStroke();
        fill(this.color);
        rect(this.x, this.y , this.side,this.side*2);
    }
    this.isOnRoad = function(road){
         var leftCorner = (width - road.gapWidth )/2 + road.offset;
         var rightCorner = leftCorner + road.gapWidth;
         if(road.y >= this.y){
            return this.x < leftCorner || this.x + this.side > rightCorner;
         }
         else{
            return false;
         }
    }
    this.mousePressed= function(){
        
    }
}
