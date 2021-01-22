
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Ground1;
var Hammer1;
var Stone1;
var Rubber1;
var Iron1;
function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   Ground1=new Ground(600,400,1200,20)
   Hammer1=new Hammer(100,100)
   Stone1 = new Stone(700,230,50,50);
   Rubber1 = new Rubber(400,200,25,25)
   Iron1 = new Iron(300,300,35,35)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Ground1.display();
  Hammer1.display();
  Stone1.display();
  Rubber1.display();
  Iron1.display();
  drawSprites();
}



