
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	r1 = loadImage("1.png");
	r2 = loadImage("2.png");
	r3 = loadImage("3.png");
	r4 = loadImage("4.png");
}

var r,l;
var drop=[];

function setup() {
	createCanvas(480, 700);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	man = new Ground (200,400,150,450);
	

	Engine.run(engine);
  
}


function draw() {
    background(0);
   Engine.update(engine);
 
	man.display();

	
	  if(frameCount%2==0){
		drop.push(new Rain(random(20,460),10));
	   }

	   
  for (var s = 0; s < drop.length; s++) {
   
	drop[s].display();
  }
 
  	   
  light();
  drawSprites();
 
}

function light(){
	if(frameCount%100==0){
		l = createSprite(random(100, 400),0,20,20);

		var rand = Math.round(random(1,4));
		switch(rand){
	
			case 1:l.addImage(r1);
            break;
			case 2:l.addImage(r2);
            break;
			case 3:l.addImage(r3);
            break;
			case 4:l.addImage(r4);
            break;			
		}
		l.scale=0.4
	}
}

