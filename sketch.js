
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

var paper
var ground
var leftSide
var rightSide
var bottom

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
  paper=new Paper(100,600,10);
  ground=new Ground (400,680,800,20)
  leftSide=new Dustbin(550,620,20,100)
  rightSide=new Dustbin(670,620,20,100)
  bottom=new Dustbin(610,660,10,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  paper.display();
  ground.display();
  leftSide.display();
  rightSide.display();
  bottom.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode=== up_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}


