

// positions

let plantX = 200;
let plantY = 455;

let bearX = 300;
let bearY = 450;

let radioX = 405;
let radioY = 445;

// dragging states
let draggingPlant = false;
let draggingBear = false;
let draggingRadio = false;

let startImage;
let gameStarted = false;

function preload(){
  startImage = loadImage ('startscreen.png')
}
function setup() {
  createCanvas(600, 520);
}

function draw() {

  // start screen 
  if (!gameStarted) {
    image(startImage, 0, 0, width, height);

    fill(255); 
    textSize(20);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text("Welcome to your new home! Click anywhere to start!", width/2, height/2);
    return; 
  }
  background(255,255,255);
  
  if (draggingPlant) {
    plantX = mouseX;
    plantY = mouseY;
  }

  if (draggingBear) {
    bearX = mouseX;
    bearY = mouseY;
  }

  if (draggingRadio) {
    radioX = mouseX - 30;
    radioY = mouseY - 20;
  }
//wall
  noStroke();
  fill(255, 228, 225);
  rect(0, 0, width, 300);
//floor
  fill(211, 211, 211);
  rect(0, 300, width, 120);

  stroke(0);
  line(0, 300, width, 300);
//carpet
  noStroke();
  fill(255, 182, 193);
  rect(150, 330, 300, 70, 10);
//window frame
  noStroke();
  fill(255,255,255);
  rect(200, 70, 200, 110);
//glass
  fill(135, 206, 250);
  rect(210, 80, 180, 90);
//divider lines
  stroke(255);
  strokeWeight(2);
  line(300, 80, 300, 170);
  line(210, 125, 390, 125);
  noStroke();
//bed
  fill(255);
  rect(50, 230, 150, 70);
  fill(240);
  rect(60, 240, 40, 25);
  fill(255, 182, 193);
  rect(50, 260, 150, 40);
//desk
  fill(140, 90, 60);
  rect(400, 240, 150, 20);
  rect(410, 260, 10, 40);
  rect(530, 260, 10, 40);
//window ledge
  noStroke();
  fill(190,190,195);
  rect(190, 180, 220,12);
//empty box frame for items
  stroke(0);
  strokeWeight(2);
  noFill();
  rect(120, 440, 360, 60);
//plat
  noStroke();
  fill(200, 100, 60);
  rect(plantX - 15, plantY + 10, 30, 20);

  fill(60, 160, 90);
  ellipse(plantX, plantY, 20, 40);
  ellipse(plantX - 10, plantY + 5, 20, 20);
  ellipse(plantX + 10, plantY + 5, 20, 20);
//bear
  fill(160, 120, 80);
  ellipse(bearX, bearY, 30, 30);
  ellipse(bearX - 12, bearY - 12, 15, 15);
  ellipse(bearX + 12, bearY - 12, 15, 15);
  ellipse(bearX, bearY + 20, 35, 30);
//eyes
  fill(0);
  ellipse(bearX - 6, bearY - 2, 4, 4);
  ellipse(bearX + 6, bearY - 2, 4, 4);
//tummy
  fill(255, 240, 200);
  ellipse(bearX, bearY + 20, 20, 18);
//radio
  stroke(120);
  strokeWeight(2);
  line(radioX + 30, radioY + 15, radioX + 40, radioY - 35);
  noStroke();
  fill(120);
  ellipse(radioX + 40, radioY - 35, 6, 6);

  fill(60);
  rect(radioX, radioY, 60, 40, 6);

  fill(90);
  ellipse(radioX + 15, radioY + 20, 22, 22);

  stroke(60);
  strokeWeight(1);
  point(radioX + 10, radioY + 15);
  point(radioX + 20, radioY + 15);
  point(radioX + 10, radioY + 25);
  point(radioX + 20, radioY + 25);
  noStroke();

  fill(150, 200, 255);
  rect(radioX + 33, radioY + 7, 18, 10, 2);

  fill(200);
  ellipse(radioX + 37, radioY + 25, 8, 8);
  ellipse(radioX + 50, radioY + 25, 8, 8);
//game instructions
  fill(60);
  noStroke();
  textSize(12);
  textAlign(CENTER);
  text("Click and drag on any of the three objects in the box to move, and place them in the room", width/2, 40);
}
//mousepressed functions
function mousePressed() {
  if (!gameStarted) {
    gameStarted = true;
    return;
  }

  if (dist(mouseX, mouseY, plantX, plantY) < 25) {
    draggingPlant = true;
  } else if (dist(mouseX, mouseY, bearX, bearY) < 25) {
    draggingBear = true;
  } else if (
    mouseX > radioX &&
    mouseX < radioX + 60 &&
    mouseY > radioY &&
    mouseY < radioY + 40
  ) {
    draggingRadio = true;
  }
}

// stop dragging when mouse released
function mouseReleased() {
  draggingPlant = false;
  draggingBear = false;
  draggingRadio = false;
}
