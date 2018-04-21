var box;
var coins = [];
function setup(){
    createCanvas(480,640);
    background(0);
    box = new Box();
}


function draw(){
    background(0);
    //coins
    coins.forEach(coin => {
        coin.update();
        coin.draw();

    });
    //box
    this.box.draw();
    this.box.update();
}
function mouseClicked() {
    box.mouseClicked();
}