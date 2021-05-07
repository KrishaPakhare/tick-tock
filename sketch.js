var no3 , number3;
var no9 , number9;
var no6 , number6;
var no12 , number12;

function setup() {
  createCanvas(800,400);

  angleMode(DEGREES)
  
}

function preload(){
  no3 = loadImage("images/3.png");
  no9 = loadImage("images/9.png");
  no12 = loadImage("images/12.png");
  no6 = loadImage("images/6.png");
}

function draw() {
  background(255,255,255);
  
  translate(200,200);
  rotate(-90);
  
  hr = hour();
  mn = minute();
  sc =second();

  scAngle = map(sc,0,60,0,36);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,60,0,360);
 // for second hand  
  push();
  rotate(scAngle);

  stroke (255,0,0);
  strokeWeight(7);
  line (0,0,100,0);
  pop();
// for minute hand
  push ();
  rotate(mnAngle);

  stroke (0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();
 // for hour hand 
  push();
  rotate(hrAngle);
  
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke(255,0,255);
  point(0,0);
  strokeWeight(10);
  noFill();

  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);

  stroke(0,255,0);
  arc(0,0,200,200,0,mnAngle);

  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);

  number3 = createSprite(120,-9,10,10) 
  number3.addImage(no3);
  number3.scale = 0.1;
  rotate(90);
  number6 = createSprite(-110,-9,10,10)
  number6.addImage(no6);
  number6.scale = 0.1;
  number9 = createSprite(15,120,10,10)
  number9.addImage(no9);
  number9.scale = 0.1;
  number12 = createSprite(9,-120,10,10)
  number12.addImage(no12);
  number12.scale = 0.1;

  drawSprites();
}