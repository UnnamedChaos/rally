function Road(){
    this.gapWidth = 200;
    this.speed = 20;
    this.x = 0;
    this.barHeight = 100;
    this.y = -this.barHeight;
    this.offset = 0;
    this.color = color(200);
    this.update = function(){
        this.y += this.speed;
    }
    this.draw = function(){
        noStroke();
        fill(this.color);
        rect(this.x,this.y, (width - this.gapWidth )/2 + this.offset,this.barHeight);
        rect(width,this.y, -(width - this.gapWidth )/2 + this.offset,this.barHeight);
        fill(color(0,180,0));
        rect(this.x,this.y, (width - this.gapWidth )/2 + this.offset - 15,this.barHeight);
        rect(width,this.y, -(width - this.gapWidth )/2 + this.offset + 15,this.barHeight);
    }
}