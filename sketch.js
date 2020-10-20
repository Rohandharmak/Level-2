var manrunning, trackimage, finishimage;
var gameState=1;
var hurdles, jump;
var question1, question2, question3;
var time=0;
var ting,buzzer;


function preload() {
  manrunning = loadAnimation("man1.png", "man2.png", "man3.png", "man4.png", "man5.png", "man6.png", "man7.png", "man8.png", "man9.png", "man10.png", "man11.png",
    "man12.png");
  trackimage = loadAnimation("track.png");
  finishimage = loadAnimation("finishimage.png");
  jump = loadAnimation("jump.png");
  question1 = loadAnimation("3+9.png");
  question2 = loadAnimation("8÷2.png");
  question3 = loadAnimation("2x5.png");
  ting=loadSound("ting.mp3");
  buzzer=loadSound("buzzer.mp3");
  
  
}

function setup() {
  createCanvas(600, 600);


  track = createSprite(300, 300);
  track.addAnimation("track", trackimage);
  track.addAnimation("1", question1);
  track.addAnimation("2", question2);
  track.addAnimation("3", question3);
  track.addAnimation("finish",finishimage);
  
  track.x = track.width / 2;
  track.velocityX = -5;

  man = createSprite(100, 490, 100, 100);
  man.addAnimation("running", manrunning);
  man.addAnimation("jump", jump);
  man.scale = 0.7;
  man.visible = true;


  invisibleground = createSprite(20, 500, 400, 20);
  invisibleground.visible = false;

  topleft=createSprite(70,130,90,70);
  topleft.visible=false;
 
  
  topright=createSprite(540,130,90,70);
  topright.visible=false;
 
  
  bottomleft=createSprite(70,260,90,70);
  bottomleft.visible=false;
 
  
  bottomright=createSprite(540,260,90,70);
  bottomright.visible=false;
  
  
}

function draw() {
  drawSprites();
  stroke("yellow");
  textSize(20);
  fill("yellow");
  text("Time:"+Math.round(time),511,30);

  
 if(gameState===1){
    level1();
   time=time+0.033;
 }
  if(gameState===2){
    level2();
    time=time+0.033;
  }
    if(gameState===3){
    level3();
    time=time+0.033;
    }
  if(gameState===4){
    level4();
    time=time+0;
  }
  
  man.collide(invisibleground);

  if (track.x < 0) {
    track.x = track.width / 2;  
  }
  
  

  if(mousePressedOver(bottomright)){
    ting.play();
    track.changeAnimation("track",trackimage);
    man.changeAnimation("running",manrunning);
    track.velocityX=-5;
    gameState=gameState+1;
    console.log(gameState);
  }
  if(mousePressedOver(topleft)){
    buzzer.play();
  }
  if(mousePressedOver(topright)){
    buzzer.play();
  }
  if(mousePressedOver(bottomleft)){
    buzzer.play();
  }
  }

function level1(){
  bottomright.x=540;
    bottomright.y=130;
    topright.x=540;
    topright.y=260;


  if(track.x<0){
    track.velocityX = 0;
    track.changeAnimation("1", question1);
    man.changeAnimation("jump", jump);
    }
}
    
function level2(){
  bottomright.y=260;
  bottomright.x=540;
  bottomleft.x=70;
  bottomleft.y=130;
  topleft.y=130;
  topleft.x=540;
  topright.x=70;
  topright.y=260;
  
   if(track.x<0){
    track.velocityX = 0;
    track.changeAnimation("2", question2);
   man.changeAnimation("jump", jump);
}
}
function level3(){
  bottomright.x=70;
  bottomright.y=260;
  topright.x=540;
  topright.y=260;
  if(track.x<0){
  track.velocityX = 0;
    track.changeAnimation("3", question3);
   man.changeAnimation("jump", jump);
  }
}
function level4(){
  if(track.x<0){
    track.velocityX = 0;
    track.changeAnimation("finish", finishimage);
   man.velocityX=4;
   
}
}