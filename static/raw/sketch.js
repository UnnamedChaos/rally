

var box;
var coins = [];
var score = 0;
var websocket;
var util;
function setup(){
    createCanvas(480,640);
    background(0);
    box = new Box();
    util = new Utility();
    websocket = new Websocket();
    websocket.connect(greeting,generate);
}

function generate(coin){
    console.log("generate");
    box.spawn();
}

function greeting(greeting) {
    console.log(JSON.parse(greeting.body).content);
}
function draw(){
    background(0);
    //coins
    for(var i = coins.length - 1; i >= 0 ; i --){
        var coin = coins[i];
        coin.update();
        coin.draw();
        if(coin.speed == 0){
            if(util.over(mouseX,mouseY,coin.posX,coin.posY,coin.boxWidth,coin.boxHeight,10,10)){
                score += coin.value;
                websocket.generate(coin.value);
                coins.splice(i,1);
            }
        }
    }
    //box
    this.box.draw();
    this.box.update();
    drawInterface();
}
function mouseClicked() {
    box.mouseClicked();
}
function drawInterface(){
    textSize(32);
    fill(color(255));
    textAlign(RIGHT,TOP);
    text("Score: " + score , width -10, 0);
    textAlign(LEFT,TOP);
    if(websocket.connected){
        fill(color(0,255,0));
        text("Connected",0,0);
    }
    else{
        fill(color(255,0,0));
        text("Disconnected",0,0);
    }
}