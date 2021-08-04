
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var stone,iron,rubber,hammer;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(400,680,800,20,options)
  World.add(world,ground);
	//Create the Bodies Here.
    stone=new Stone(700,320,100);
	iron=new Iron(300,350);
	rubber=new Rubber(900,450,70);
	hammer=new Hammer(10,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  stone.display();
  iron.display();
  rubber.display();
  hammer.display();
  rect(ground.position.x,ground.position.y,800,20);
  
  drawSprites();
 
}



