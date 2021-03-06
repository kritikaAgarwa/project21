var bullet1;
var thickness,speed,weight;
var engine,world;
var lin1;
var wall;

function setup() {
  createCanvas(1600,400); 

  
  bullet1=createSprite(200,200,50,50);
  lin1=createSprite(100,100,width*2,7);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  wall=createSprite(1200, 200, thickness,height);

  bullet1.velocityX=speed;

  wall.shapeColor=color(80,80,80) ;

  lin1.shapeColor="blue";
  
  bullet1.shapeColor="white";
 
  
}

function draw() {
  background(0,0,0);  

  if(hasCollided1(bullet1,wall)){
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
  if(wall.collide(bullet1)){
    bullet1.velocityX=0;
    wall.velocityX=0;
  }
  }
  
  
  drawSprites();
}

function hasCollided1(lbullet1,lwall){
  bullet1RightEdge=lbullet1.x + lbullet1.width;
  wallLeftEdge=lwall.x;
  if(bullet1RightEdge>=wallLeftEdge){
    return true
  }
  return false;
}