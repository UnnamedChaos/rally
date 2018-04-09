var car;
var roads = [];
var disortionGap = 80;
var disortionOrientation = 0;
var score = 0;
var lost = false;
var difficulty = 0;
var disortionStrength = 10;
var difficultyClimb = 60*20;
var j = 0;
var disortion = 0;
function setup(){
    createCanvas(480,640);
    car = new Car();
    roads.push(new Road());
}
function draw(){
    background(0);
    if(frameCount % difficultyClimb == 0){
        console.log("harder");
        background(255);
        difficulty+= 5;
        if(difficulty >= 50){
            difficulty = 50;
        }
        disortionGap -= difficulty;
        if(disortionGap <= 20){
            disortionGap = 20;
        }
    }
    
    
    if(!lost){
        //new roads
        if(frameCount % 5 == 0){
            score++;
            if(frameCount % disortionGap == 0){
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
        
        //raods
        for(var i = roads.length -1; i >= 0; i--){
            roads[i].update();
            roads[i].draw();
            if(roads[i].y >= height){
                roads.splice(i,1);
            }
    
            if(car.isOnRoad(roads[i])){
                car.color = color(150,0,0);
                lost = true;
            }
        }
        car.update();
        car.draw();
        textSize(32);
        fill(color(255));
        textAlign(RIGHT,TOP);
        text("Score: " + score , width -10, 0);
        textAlign(LEFT,TOP);
        text("Difficulty: " + (difficulty/5) ,10, 0);
        fill(color(200,30,30));
        var dif = frameCount % difficultyClimb;
        dif = dif/(difficultyClimb) ;
        rect(0,height - 5,dif*width,5);
    }
    else{
        textSize(32);
        fill(color(255));
        textAlign(CENTER);
        text("GAME OVER", width/2, height/2);
        textSize(20);
        text("Score: " + score, width/2, height/2 + 60);
        textSize(20);
        text("Click to restart",width/2, height/2 + 120);
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
        setup();
    }
}