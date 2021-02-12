var rect1,rect2,rect3,rect4;
var rect5,rect6;

function setup() {
 createCanvas(800,400);
 rect1=createSprite(400,200,50,100);
 rect2=createSprite(200,200,50,100);
 rect3=createSprite(600,200,50,100);
 rect4=createSprite(600,400,50,100);
 rect5=createSprite(300,200,50,100);
 rect6=createSprite(500,200,50,100);

 rect1.shapeColor="red";
 rect2.shapeColor="green";
 rect3.shapeColor="blue";
 rect4.shapeColor="yellow";
 rect5.shapeColor="violet";
 rect6.shapeColor="orange";

 rect1.debug=true;
 rect2.debug=true;
 rect3.debug=true;
 rect4.debug=true;
 rect5.debug=true;
 rect6.debug=true;

 rect3.velocityY=3;
 rect4.velocityY=-3;
}

function draw() {
  rect2.y=mouseY;
  rect2.x=mouseX;

  background(0); 
  if(isTouching(rect2,rect6)){
    rect6.shapeColor="white";
    rect2.shapeColor="white";
  }
  else{
    rect6.shapeColor="orange";
    rect2.shapeColor="green";
  }
  
bounceOff(rect3,rect4);

  drawSprites();
}
