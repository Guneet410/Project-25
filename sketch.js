const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;
var _arrow_  = []


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, 450, 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  
  
  
  cplayer = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
  //Create an arrow Object
  Pplayer = new PlayerArcher(
    width - 1040,
    player.body.position.y - 20,
    120,
    120
  );


}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(20)
  text("Maam the arrow is not getting showed on pressing the right key", 300,100 )
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
  
 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  //playerArcher.display();
  cplayer.display()
  Pplayer.display()
//Display arrow();
for (var i = 0; i < _arrow_.length; i++) {
  showArrows(i, _arrow_);}
//arrows.display()

}
 // if Space (32) key is pressed call shoot function of playerArrow
 
 function keyPressed() {

  //if( keyCode === RIGHT_ARROW){
    // create an arrow object and add into an array ; set its angle same as angle of playerArcher
   //  arrows.shoot (arrows.body.angle)

     if (keyCode === RIGHT_ARROW) {
      var posX = Pplayer.body.position.x;
      var posY = Pplayer.body.position.y;
      var angle = Pplayer.body.angle+PI/2;
      arrows =  new PlayerArrow( posX,posY,100,20)
      Matter.Body.setAngle(arrows.body, angle);
      _arrow_.push(arrows);
    }
  }

  function showArrows(index, arrows) {
    arrows[index].display();
  }


  
  function keyReleased () {

    if(keyCode === RIGHT_ARROW){
      //call shoot() function for each arrow in an array playerArrows
     // if (playerArrows.length) {
      _arrow_ [_arrow_.length - 1]
     var angle = playerArcher.body.angle+PI/2;
     _arrow_ [_arrow_.length - 1].shoot(angle);
      }
    }
  




 





















