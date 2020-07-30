const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var paperObject;
var dustbinObject;
var world,engine;

function setup() {
	createCanvas(1600,700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
    
    
    dustbinObject = new Dustbin(1200,650)
	paperObject = new Paper(500,300,40);
	ground = new Ground(width/2,670,width,20);
	launcher = new Launcher(paperObject.body,{x:500,y:200});

	Engine.run(engine);  
}
function draw() {
  rectMode(CENTER);
  background("white");
  paperObject.display();
  ground.display();
  dustbinObject.display();
  launcher.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  launcher.fly();
  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:40,y:-40});
}



