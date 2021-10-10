/**
 * Licence @copyright DarwinX3052
 *      
 * Game: Speed Adventure
 * 
 * Version: Prototype 0.6
 */

//Images
var timg, simg;
var gi, ei;


//Variables

//Title & Start
var title, start;
//Game Over Screen
var gameOver;
//End Screen
var end;
//Barrier
var barrier;
//Player
var p1;
//Enemies
var e1, e2, e3, e4, e5, e6, b1, a1, a2, a3;
//Walls
var w1, w2, w3, w4, w5, w6, w7, w8, w9;
var x1, x2, x3, x4, x5, x6, x7, x8, x9;
//Goal
var goal;
//Lives
var lives = 20;
//Deaths
var deaths = 0;
//Level
var level = 0;
var levelname = "Prototype Sandbox: 1";
//GameState
var gameState = "menu";

function preload(){
  timg = loadImage("title.png");
  simg = loadImage("start.png");
  gi = loadImage("gameOver.png");
  ei = loadImage("end.png");
  
}
function setup(){
  createCanvas(1200, 700);

  //TITLE AND START
  title = createSprite(600, 150, 500, 250);
  start = createSprite(600, 450, 200, 100);
  title.addImage(timg);
  start.addImage(simg)
  //HUD BARRIER
  barrier = createSprite(600, 50, 1200, 100);

  //PLAYER
  p1 = createSprite(50, 350, 25, 50);
  p1.shapeColor = "blue";

  //ENEMIES
  e1 = createSprite(750, 550, 100, 100);

  e2 = createSprite(338, 550, 75, 100);
  e3 = createSprite(475, 550, 100, 100);

  e4 = createSprite(250, 350, 100, 100);
  e5 = createSprite(500, 450, 100, 100);
  e6 = createSprite(750, 350, 100, 100);

  e1.shapeColor = "red";
  e2.shapeColor = "red";
  e3.shapeColor = "red";
  e4.shapeColor = "red";
  e5.shapeColor = "red";
  e6.shapeColor = "red";

  e1.velocityY = 25;

  e2.velocityY = 25;
  e3.velocityY = -10;
  e3.velocityX = 10;

  e4.velocityY = 10;
  e4.velocityX = -10;
  e5.velocityY = -10;
  e5.velocityX = 10;
  e6.velocityY = 10;
  e6.velocityX = -10;

  //BOSSES
  b1 = createSprite( 600, 350, 200, 200);
  b1.shapeColor = "brown"

  b1.velocityX = -15;
  b1.velocityY = -20;

  //ATTACKS
  a1 = createSprite(b1.x, b1.y, 75, 25);
  a2 = createSprite(b1.x, b1.y, 75, 25);
  a3 = createSprite(b1.x, b1.y, 75, 25);
  a1.shapeColor = "orange";
  a2.shapeColor = "orange";
  a3.shapeColor = "orange";

  //WALLS PART1
  w1 = createSprite(600, 125, 500, 50);

  w2 = createSprite(400, 300, 50, 400);
  w3 = createSprite(700, 500, 100, 400);
  w4 = createSprite(150, 425, 300, 50);

  w5 = createSprite(350, 250, 500, 50);
  w6 = createSprite(850, 550, 500, 50);

  w7 = createSprite(800, 400, 50, 500);
  w8 = createSprite(1000, 625, 350, 50);
  w9 = createSprite(100, 425, 50, 300);

  //WALLS PART2
  x1 = createSprite(600, 125, 500, 50);
  x2 = createSprite(300, 200, 50, 400);
  x2.velocityY = 4;

  x3 = createSprite(700, 500, 100, 400);

  x4 = createSprite(150, 425, 300, 50);
  x5 = createSprite(350, 250, 500, 50);
  x6 = createSprite(850, 550, 500, 50);

  w1.shapeColor = "darkgreen";

  w2.shapeColor = "green";
  w3.shapeColor = "green";
  w4.shapeColor = "green";

  w5.shapeColor = "limegreen";
  w6.shapeColor = "limegreen";

  w7.shapeColor = "black";
  w8.shapeColor = "black";
  w9.shapeColor = "black";

    w1.visible = false;
    w2.visible = false;
    w3.visible = false;
    w4.visible = false;
    w5.visible = false;
    w6.visible = false;
    w7.visible = false;
    w8.visible = false;
    w9.visible = false;

    x1.visible = false;
    x2.visible = false;
    x3.visible = false;
    x4.visible = false;
    x5.visible = false;
    x6.visible = false;

  //GOAL
  goal = createSprite(1000, 350, 200, 200);
  goal.shapeColor = "yellow";
  goal.setCollider("rectangle", 0, 0, 100, 100);

  //GAMEOVER AND END
  gameOver = createSprite(600, 350, 1200, 700);
  end = createSprite(600, 350, 1200, 700);
  gameOver.addImage(gi);
  end.addImage(ei);
  
  gameOver.visible = false;
  end.visible = false;
}
function draw(){
  background("white");
  fill("black");
  textSize(24)
  drawSprites();

  if (gameState === "menu"){
    title.visible = true;
    start.visible = true;


    p1.visible = false;
    goal.visible = false;
    barrier.visible = false;
    w1.visible = false;
    w2.visible = false;
    w3.visible = false;
    w4.visible = false;
    w5.visible = false;
    w6.visible = false;
    w7.visible = false;
    w8.visible = false;
    w9.visible = false;

        e1.visible = false;
    e2.visible = false;
    e3.visible = false;
    e4.visible = false;
    e5.visible = false;
    e6.visible = false;

    b1.visible = false;
    a1.visible = false;
    a2.visible = false;
    a3.visible = false;

    x1.visible = false;
    x2.visible = false;
    x3.visible = false;
    x4.visible = false;
    x5.visible = false;
    x6.visible = false;

    if (mousePressedOver(start)){
      gameState = "protoStart";
      level = 1;
    }
  }
  if(gameState === "protoStart"){
  text("Level: " + levelname, 25, 25);
  text("Lives: " + lives, 25, 50);
  text("DeathsPerLevel: " + deaths, 25, 75);


  if (keyDown("Q")){
    if (keyDown("Shift")){
      if (keyWentDown("N")){
        level += 1;
      }
    }
  }

  title.visible = false;
  start.visible = false;

  p1.visible = true;
    goal.visible = true;
    barrier.visible = true;


  //Calling out other functions
  controller();
  attackAI();
  }
  if(gameState === "protoEnd"){
    //Depth
    end.depth = p1.depth + 10;
    end.visible = true;
    level = 0;
    if (frameCount % 120 === 0){
      lives = 20;
      gameState = "menu";
      end.visible = false;
    }
  }
  if(gameState === "protoGameOver"){
    //Depth
    gameOver.depth = p1.depth + 20;
    gameOver.visible = true;
    level = 0;
    if (frameCount % 100 === 0){
      lives = 20;
      gameOver.visible = false;
      gameState = "menu";
    }
  }
  edges = createEdgeSprites();

  //Depth
  p1.depth = p1.depth + 100;

  //Boss SpeedY
  if(frameCount % 60 === 0){
    b1.velocityY = random(-25,25);
  }

  //Level Switcher
  levelSwitch();
  x2.bounceOff(edges)
}