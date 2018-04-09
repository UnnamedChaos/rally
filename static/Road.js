function Road(){
    this.gapWidth = 200;
    this.speed = 8;
    this.x = 0;
    this.barHeight = 40;
    this.y = -this.barHeight;
    this.offset = 0;
    this.color = color(200);
    this.update = function(){
        this.y += this.speed;
    }
    this.draw = function(upperoffset, loweroffset){
        noStroke();
        fill(this.color);
        rect(this.x,this.y, (width - this.gapWidth )/2 + this.offset,this.barHeight);
        rect(width,this.y, -(width - this.gapWidth )/2 + this.offset,this.barHeight);
        if(upperoffset != loweroffset){
            if(upperoffset > this.offset){
                triangle(this.x +(width - this.gapWidth )/2 + this.offset , this.y, this.x +(width - this.gapWidth )/2 + this.offset , this.y + this.barHeight, this.x +(width - this.gapWidth )/2 + this.offset + Math.abs(upperoffset-this.offset) , this.y+ this.barHeight);
                triangle(this.x + width/2 + this.gapWidth/2 + this.offset, this.y, this.x + width/2 + this.gapWidth/2 + this.offset,this.y + this.barHeight,this.x + width/2 + this.gapWidth/2 + this.offset - Math.abs(upperoffset-this.offset) ,this.y);

            }
            else{
                triangle(this.x +(width - this.gapWidth )/2 + this.offset , this.y, this.x +(width - this.gapWidth )/2 + this.offset + Math.abs(upperoffset-this.offset), this.y, this.x +(width - this.gapWidth )/2 + this.offset  , this.y + this.barHeight);
                triangle(this.x + width/2 + this.gapWidth/2 + this.offset , this.y + this.barHeight, this.x + width/2 + this.gapWidth/2 + this.offset - Math.abs(upperoffset-this.offset),this.y + this.barHeight,this.x + width/2 + this.gapWidth/2 + this.offset  ,this.y);
            }
        }
        else{
            if(this.offset > upperoffset){
                rect(this.x + width/2 + this.gapWidth/2 + this.offset , this.y, -Math.abs(upperoffset-this.offset),this.barHeight);
            }
            else{
                rect(this.x + width/2 - this.gapWidth/2 + this.offset , this.y, Math.abs(upperoffset-this.offset),this.barHeight);
            }
        }
        fill(color(0,180,0));
        if(upperoffset != loweroffset){
            if(upperoffset > this.offset){
                var j = 15;
                triangle(this.x +(width - this.gapWidth )/2 + this.offset - j , this.y, this.x +(width - this.gapWidth )/2 + this.offset - j , this.y + this.barHeight, this.x +(width - this.gapWidth )/2 + this.offset + Math.abs(upperoffset-this.offset) - j, this.y+ this.barHeight);
                triangle(this.x + width/2 + this.gapWidth/2 + this.offset + j, this.y, this.x + width/2 + this.gapWidth/2 + this.offset + j,this.y + this.barHeight,this.x + width/2 + this.gapWidth/2 + this.offset - Math.abs(upperoffset-this.offset) + j,this.y);

            }
            else{
                var j = -15;
                triangle(this.x +(width - this.gapWidth )/2 + this.offset + j, this.y, this.x +(width - this.gapWidth )/2 + this.offset + Math.abs(upperoffset-this.offset)+ j, this.y, this.x +(width - this.gapWidth )/2 + this.offset  + j, this.y + this.barHeight);
                triangle(this.x + width/2 + this.gapWidth/2 + this.offset - j, this.y + this.barHeight, this.x + width/2 + this.gapWidth/2 + this.offset - Math.abs(upperoffset-this.offset)- j,this.y + this.barHeight,this.x + width/2 + this.gapWidth/2 + this.offset  - j,this.y);
            }
        }
        if(upperoffset == loweroffset){
            if(this.offset > upperoffset){
                rect(this.x,this.y, (width - this.gapWidth )/2 + this.offset - 15,this.barHeight);
                rect(width,this.y, -(width - this.gapWidth )/2 + this.offset + 15 - Math.abs(upperoffset-this.offset),this.barHeight);
            }
            else{
                rect(this.x,this.y, (width - this.gapWidth )/2 + this.offset - 15 + Math.abs(upperoffset-this.offset) ,this.barHeight);
                rect(width,this.y, -(width - this.gapWidth )/2 + this.offset + 15 ,this.barHeight);
            }
        }else{
            rect(this.x,this.y, (width - this.gapWidth )/2 + this.offset - 15,this.barHeight);
            rect(width,this.y, -(width - this.gapWidth )/2 + this.offset + 15,this.barHeight);
        }
    }
}