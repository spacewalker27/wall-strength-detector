var bullet,wall;
var speed,weight;
var thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  
  bullet=createSprite(50,200,50,50);
  bullet.velocityX=speed;

  wall=createSprite(1200,200,thickness,height/2);
 
}

function draw() {
  background(255,255,255);  
  if (wall.x-bullet.x<(bullet.width+wall.width)/2) {
    
    bullet.velocityX=0;
      damage=(0.5*weight*speed*speed)/thickness*thickness*thickness;
  }
 if(damage<10) {
   bullet.shapeColour=("green");
 }
else {
  bullet.shapeColour=("red");
}

  drawSprites();
}