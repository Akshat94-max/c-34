const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var Ball;
var Rope ;

function setup(){
    var canvas = createCanvas(950,750);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(150,740,1900,10); 
    box1 = new Box(700,100,70,70);
    box2 = new Box(700,100,70,70);
    box3 = new Box(700,100,70,70);
    box4 = new Box(700,100,70,70);
    box5 = new Box(700,100,70,70);
    box6 = new Box(700,100,70,70);
    box7 = new Box(700,100,70,70);
    box8 = new Box(700,100,70,70);
    box9 = new Box(700,100,70,70);

   Ball =  Bodies.circle(100,100,90);
   World.add(world,Ball);
Rope = new SlingShot(Ball,{x:450,y:100})

}

function draw(){
    background("YELLOW");
Engine.update(engine);
   ground.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();

   ellipse(Ball.position.x,Ball.position.y,90);

Rope.display();

}