var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["22df592c-9f27-4a14-989c-878cc40261f4","0b3668eb-27a1-417a-bfcb-78b3818c16bb","38b919de-370d-4e27-9370-44e540c3219d","b7b0f90e-b3ab-4d45-a816-1cdf27d88e0a"],"propsByKey":{"22df592c-9f27-4a14-989c-878cc40261f4":{"name":"soccer","sourceUrl":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png"},"0b3668eb-27a1-417a-bfcb-78b3818c16bb":{"name":"3190","sourceUrl":"assets/api/v1/animation-library/gamelab/cI6imfxnuMCdD.5eCI6xlHBZdgBMxYRF/category_robots/robot_31.png","frameSize":{"x":322,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"cI6imfxnuMCdD.5eCI6xlHBZdgBMxYRF","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":322,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/cI6imfxnuMCdD.5eCI6xlHBZdgBMxYRF/category_robots/robot_31.png"},"38b919de-370d-4e27-9370-44e540c3219d":{"name":"1234","sourceUrl":"assets/api/v1/animation-library/gamelab/_Rp.lcHXYHhbwtTQIa6YAsjCoptU3wQc/category_people/kid_12.png","frameSize":{"x":242,"y":339},"frameCount":1,"looping":true,"frameDelay":2,"version":"_Rp.lcHXYHhbwtTQIa6YAsjCoptU3wQc","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":242,"y":339},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_Rp.lcHXYHhbwtTQIa6YAsjCoptU3wQc/category_people/kid_12.png"},"b7b0f90e-b3ab-4d45-a816-1cdf27d88e0a":{"name":"tanishk","sourceUrl":"assets/v3/animations/CAwjE_1CXR9M2T7c6JdNGqgsM_oBdP5N0af1S7RRAx4/b7b0f90e-b3ab-4d45-a816-1cdf27d88e0a.png","frameSize":{"x":500,"y":223},"frameCount":1,"looping":true,"frameDelay":4,"version":"1HRhxfV5YdjEK9g._wjZSOQ5aX08MD.I","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":223},"rootRelativePath":"assets/v3/animations/CAwjE_1CXR9M2T7c6JdNGqgsM_oBdP5N0af1S7RRAx4/b7b0f90e-b3ab-4d45-a816-1cdf27d88e0a.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerMallet;
var gamestate = "serve";
var goal1=createSprite(200,18,100,20);
goal1.shapeColor=("yellow");

var goal2=createSprite(200,382,100,20);
goal2.shapeColor=("yellow");


// making court
var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "white";
var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "white";
var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "white";
var boundary4 = createSprite(400,200,10,400);
boundary4.shapeColor = "white";
goal1.setAnimation("tanishk");
goal1.scale=0.3;
goal2.setAnimation("tanishk");
goal2.scale=0.3;

// creating objects and giving them colours
var striker = createSprite(200,200,10,10);
striker.shapeColor = "white";
striker.setAnimation("soccer");
striker.scale=0.1;
var playerMallet = createSprite(200,60,50,10);
playerMallet.shapeColor = "black";
playerMallet.setAnimation("1234");
playerMallet.scale=0.3;
var computerMallet = createSprite(200,340,50,10);
computerMallet.shapeColor = "black";
computerMallet.setAnimation("3190");
computerMallet.scale=0.2;
//score variables
var playerScore=0;
var compScore=0;
function draw() {
  //clear the screen
  background("green");
  
  //display the compScore  and playerScore
  textSize(18);
  fill("maroon");
  text(compScore,25,225);
  text(playerScore,25,185);
   if (gamestate=="serve") {

     //display text 
 textSize(18);
 fill("maroon");
  text("Press Space to strike", 120,180);
    if (keyDown("space")) {
    striker.velocityX = 10;
  striker.velocityY = 5;
 
   
      
        gamestate="play";
    }
   }

  if (gamestate=="play") {
    //make the player paddle move with the Arrow keys
  playerMallet.x= World.mouseX;
  //AI for the computer paddle
  //make it move with the striker's y position
  computerMallet.x = striker.x;
   //add the condition to check  either of the player’s score reaches 5
            //make the player paddle move with the Arrow keys
  playerMallet.x= World.mouseX;
  
   if (keyDown("space")) {
    striker.velocityX = 10;
  striker.velocityY = 5;
  }
    
   //add the condition to check  either of the player’s score reaches 5
     if ((compScore===5)|| (playerScore===5)) {
       gamestate="end";
        }
 if (gamestate=="end") {
          fill("maroon");
        textSize(18);
        //add the text for GameOver
        text("Game Over  ",170,160);
      }      
              }
   
   
   
  // Score
  
     if(striker.isTouching(goal1))
      { //increment the score of the player
        compScore = compScore+1 ;
        //use show grid to identify the  value of x and y to bring striker to center
        striker.x=200;
        striker.y=200;
        striker.velocityX=0;
        striker.velocityY=0;
      }
      
      if(striker.isTouching(goal2))
      {
        playerScore =  + 1;
        //Reset the striker by adding center value of x and y 
        striker.x=200;
        striker.y=200;
        striker.velocityX=0;
        striker.velocityY=0;
      }
 
                           
   
      //add the condition to check  either of the player’s score reaches 5
     if ((compScore===5)|| (playerScore===5)) {
        fill("maroon");
        textSize(18);
        //add the text for GameOver
        text("Game Over  ",170,160);
      }
     
  

  
  //draw line at the centre
   for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  
  //create edge boundaries
  //make the striker bounce with the top and the bottom edges
  createEdgeSprites();
  
  striker.bounceOff(edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  playerMallet.bounceOff(edges);
  computerMallet.bounceOff(edges);

  
  //serve the striker when space is pressed
 
  

  drawSprites();
}


function paddleMovement()
{
  if(keyDown("left")){
    playerMallet.x = playerMallet.x-10;
    
  }
  
  if(keyDown("right")){
    playerMallet.x = playerMallet.x+10;
    
  }
  
  if(keyDown("up")){
   if(playerMallet.y>25)
   {
    playerMallet.y = playerMallet.y- 10;
   }
  }
  
  if(keyDown("down")){
    if(playerMallet.y<120)
   {
    playerMallet.y = playerMallet.y+10;
   }
  }
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
