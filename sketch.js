function setup() {
  createCanvas(800,400);
  movingRect= createSprite(200, 200, 50, 80);
  fixedRect=createSprite(400,200,80,30);
  movingRect.velocityX=5;
  movingRect.velocityY=0.5;
}

function draw() {
  background(255,255,255);  
  // movingRect.x=mouseX;
  // movingRect.y=mouseY;
  // movingRect.shapeColor="green";
  // fixedRect.shapeColor="green";


  
  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }

  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.velocityX=(-1)*movingRect.velocityX;
    movingRect.velocityY=(-1)*movingRect.velocityY;
  }
  drawSprites();
}