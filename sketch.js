var monkey,monkey_running;
var ground;
var banana,banana_image;
var stone,stone_image
var survivalTime;
var score=0;
function preload(){
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
banana_image=loadAnimation("banana.png")
stone_image=loadAnimation("obstacle.png")
  
}

function setup(){
createCanvas(400,400)
monkey=createSprite(50,315,10,10)
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1
ground=createSprite(400,350,900,10)
ground.velocityX=-12

foodGroup=new Group(); 
obstacleGroup=new Group();
}

function draw(){
  background("White")
  if(keyDown("space")&&monkey.y>=250){
    monkey.velocityY=-12
  }
    monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)
  if(ground.x<0){
    ground.x=ground.width/2
    
  }
  if(foodGroup.isTouching(monkey)){
    score=score+1
    foodGroup.destroyEach();
  }
  food();
  obstacle();
  drawSprites();
  stroke ("green")
  textSize(15);
  fill("green")
  text("Score:"+score,310,50);
  
  stroke("black")
  textSize(15)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime"+survivalTime,100,50)
}

function food(){
  if(frameCount%100===0){
    banana=createSprite(400,350,10,10)
    banana.y=Math.round(random(120,200));
    banana.addAnimation("moving",banana_image)
    banana.scale=0.1
    banana.velocityX=-4
    banana.setLifetime=100;
    foodGroup.add(banana);
  }
}

function obstacle(){
if(frameCount%300===0){
  stone=createSprite(400,326,10,10)
  stone.addAnimation("moving",stone_image)
  stone.scale=0.1
  stone.velocityX=-4
  stone.setLifetime=100;
  obstacleGroup.add(stone)
}
}







