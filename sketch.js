
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	block1=Bodies.circle(110,50,10,block1_option);
	World.add(world,block1);

	block2=Bodies.circle(220,10,10,block2_option);
	World.add(world,block2);  

	block3=Bodies.circle(350,10,10,block3_option);

	var block1_option={
		restitution:0.5,
		friction:0.02,
		frictionAir:0.0
	}
	var block2_option={
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}
	var block1_option={
		restitution:0.1,
		friction:1,
		frictionAir:0.3
	}

	World.add(world,block3);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
 var plane_options={
	isStatic = true
 }

  drawSprites();
 
}



