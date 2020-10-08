var bullet, wall, speed, weight, thickness;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,30,10);
  thickness= random(22,83);
  wall=createSprite(1100, 200, thickness, 200);
  speed= random(223,321)
  weight= random(30,52);
  
}

function draw() {
  background(255,255,255); 
  bullet.shapeColor=color(225);
  wall.shapeColor= color(80,80,80); 
  bullet.velocityX=speed;
  if (hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (damage>10)
    {
      wall.shapeColor=color(225,0,0);
    }
    if (damage<10)
    {
      wall.shapeColor=color(0,225,0);
    }
    }
  drawSprites();
}
function hascollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge= lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true;
}
return false;
}