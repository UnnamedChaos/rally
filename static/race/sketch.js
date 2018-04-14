var car;
var roads = [];
var disortionGap = 80;
var disortionOrientation = 0;
var score = 0;
var lost = false;
var difficulty = 0;
var disortionStrength = 10;
var difficultyClimb = 60*5;
var j = 0;
var disortion = 0;
var frames = 0;
function setup(){
    createCanvas(480,640);
    car = new Car();
    roads.push(new Road());
    frames = 0;
}
function calculateDificulty(){
    if(frames % difficultyClimb == 0){
        console.log("harder");
        difficulty+= 5;
        if(difficulty >= 50){
            difficulty = 50;
        }
        disortionGap -= difficulty;
        if(disortionGap <= 20){
            disortionGap = 20;
        }
    }
}
function generateRoad(){
    if(frames % 5 == 0){
        score++;
        if(frames % disortionGap == 0){
            j = random(1);
            j = round(j);
            if(j == 0){
                disortionOrientation = -1;
            }
            else{
                disortionOrientation = 1;
            }
        }
        var r = new Road();
        r.gapWidth -= difficulty * 2
        if(disortion >= width/2 - r.gapWidth / 2){
            disortionOrientation = -1 * disortionOrientation;
            disortion = width/2 - r.gapWidth / 2;
        }else if (disortion <= -(width/2 - r.gapWidth / 2) ){
            disortionOrientation = -1 * disortionOrientation;
            disortion = -(width/2 - r.gapWidth / 2);
        }
        disortion += disortionOrientation * disortionStrength;
        r.offset = disortion;
        roads.push(r);
    }
}
function drawInterface(){
    textSize(32);
    fill(color(255));
    textAlign(RIGHT,TOP);
    text("Score: " + score , width -10, 0);
    textAlign(LEFT,TOP);
    text("Difficulty: " + (difficulty/5) ,10, 0);
}
function drawGameOverScreen(){
    textSize(32);
    fill(color(255));
    textAlign(CENTER);
    text("GAME OVER", width/2, height/2);
    textSize(20);
    text("Score: " + score, width/2, height/2 + 60);
    textSize(20);
    text("Click to restart",width/2, height/2 + 120);
}
function drawDificultyBar(){
    fill(color(200,30,30));
    var dif = frames % difficultyClimb;
    dif = dif/(difficultyClimb) ;
    rect(0,height - 5,dif*width,5);
}
function draw(){
    background(0);
    frames++;
    calculateDificulty();
    if(!lost){
        //new roads
        generateRoad();
        //raods
        for(var i = roads.length -1; i >= 0; i--){
            roads[i].update();
            if(i > 0){
                if(i < roads.length -1){
                    roads[i].draw(roads[i-1].offset,roads[i+1].offset);
                }
                else{
                    roads[i].draw(roads[i-1].offset,0);
                }
            }
            else{
                roads[i].draw(0);
            }
            if(roads[i].y >= height + roads[i].barHeight){
                roads.splice(i,1);
            }
    
            if(car.isOnRoad(roads[i])){
                car.color = color(150,0,0);
                lost = true;
            }
        }
        car.update();
        car.draw();
        drawInterface();
        drawDificultyBar();
    }
    else{
        drawGameOverScreen();
    }
}
function mouseClicked() {
    if(lost){
        car;
        roads = [];
        disortionGap = 80;
        disortionOrientation = 0;
        score = 0;
        lost = false;
        difficulty = 0;
        disortionStrength = 10;
        difficultyClimb = 60*20;
        j = 0;
        disortion = 0;
        frames = 0;
        setup();
    }
}