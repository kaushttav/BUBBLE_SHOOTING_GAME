var shooter;
var shooter_image;

var bullet1,bullet2,bullet3;

var ball1,ball1_image;
var ball2,ball2_image;
var ball3,ball3_image;

var score = 0;
var score2 = 50;
var gameOver,gameOver_image;

function preload(){
  shooter_image = loadImage("Spaceship.png");
  ball1_image = loadImage("green_ball.png");
  ball2_image = loadImage("orange_ball.png");
  ball3_image = loadImage("blue_ball.png");
  gameOver_image = loadImage("game_over.jpg");
}

function setup() {
  var canvas = createCanvas(800,400);
  shooter = createSprite(400, 340, 50, 50);
  shooter.addImage(shooter_image);
  shooter_image.resize(100,100);
  

  bullet1 = createSprite(shooter.x,shooter.y -500,5,15);
  bullet1.visible  = false;

  bullet2 = createSprite(shooter.x,shooter.y -500,5,15);
  bullet2.visible  = false;

  bullet3 = createSprite(shooter.x,shooter.y -500,5,15);
  bullet3.visible  = false;

  ball1 = createSprite(random(100,700),-10,10,10);
  ball1.velocityY = random(-5,-10);
  ball1.visible = false;

  ball2 = createSprite(random(100,700),-10,10,10);
  ball2.velocityY = random(-5,-10);
  ball2.visible = false;

  ball3 = createSprite(random(100,700),-10,10,10);
  ball3.velocityY = random(-5,-10);
  ball3.visible = false;

  gameOver = createSprite(400,200,50,50);
  gameOver.addImage(gameOver_image);
  gameOver.visible = false;

  greeting = createElement('h4');
  greeting.html("Use the mouse to move the spaceship. Press the keys a,s,d to shoot different colours bullets and match the bullets with the colour of the balloons to destroy the balloons.",300,500);
  greeting.html(" If the colour of the bullet does not match with the colour of the balloons, then you will lose the game. If your score will be atleast greater than 20 and if there will be no bullets left then you will win the game. Enjoy :)",300,500);
}

function draw() {
  background("black");  
  textSize(15);
  text("BALLOONS DESTROYED :",10,30);
  textSize(20);
  text(score,200,30);

  textSize(15);
  text("BULLETS LEFT :",630,30);
  textSize(20);
  text(score2,760,30);

  shooter.x = mouseX;

  if(keyWentDown("a")){
    bullet1.visible  = true;
    bullet1 = createSprite(shooter.x,shooter.y -50,5,15);
    bullet1.shapeColor = "green";
    bullet1.velocityY = -20;

  }
  if(keyWentDown("s")){
    bullet2.visible  = true;
    bullet2 = createSprite(shooter.x,shooter.y -50,5,15);
    bullet2.shapeColor = "orange";
    bullet2.velocityY = -20;
  }
  if(keyWentDown("d")){
    bullet3.visible  = true;
    bullet3 = createSprite(shooter.x,shooter.y -50,5,15);
    bullet3.shapeColor = "blue";
    bullet3.velocityY = -20;
  }
  if(frameCount % 100 === 0){
    ball1.visible = true;
    ball1 = createSprite(random(100,700),10,10,10);
    ball1.velocityY = random(5,7);
    ball1.addImage(ball1_image);
    ball1_image.resize(20,20);
  }
  if(bullet1.isTouching(ball1)){
    ball1.destroy();
    bullet1.destroy();
    score = score + 1;
  }
  if(frameCount % 100 === 0){
    ball2.visible = true;
    ball2 = createSprite(random(100,700),10,10,10);
    ball2.velocityY = random(5,7);
    ball2.addImage(ball2_image);
    ball2_image.resize(40,30);
  }
  if(bullet2.isTouching(ball2)){
    ball2.destroy();
    bullet2.destroy();
    score = score + 1;
  }
  if(frameCount % 100 === 0){
    ball3.visible = true;
    ball3 = createSprite(random(100,700),10,10,10);
    ball3.velocityY = random(3,7);
    ball3.addImage(ball3_image);
    ball3_image.resize(25,25);
  }
  if(bullet3.isTouching(ball3)){
    ball3.destroy();
    bullet3.destroy();
    score = score + 1;
  }
    ball1.depth = ball2.depth = ball3.depth = gameOver.depth;
    gameOver.depth = gameOver.depth + 1;
    
  if(bullet1.isTouching(ball2)|| bullet1.isTouching(ball3)|| bullet2.isTouching(ball1)||bullet2.isTouching(ball3)||bullet3.isTouching(ball1)||bullet3.isTouching(ball2)){
    gameOver.visible = true;
  }
  if(bullet1.y === shooter.y - 50){
    score2 = score2 - 1;
  }
  if(bullet2.y === shooter.y - 50){
    score2 = score2 - 1;
  }
  if(bullet3.y === shooter.y - 50){
    score2 = score2 - 1;
  }
  if(score2 === 0 && score <=19){
    gameOver.visible = true;
  }
  drawSprites();
}