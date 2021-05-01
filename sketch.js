const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;

function preload() {
  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground2 = new Ground(600,250,200,20);
    box1 = new Box(600,200,40,40);
    box2 = new Box(640,200,40,40);
    box3 = new Box(560,200,40,40);
    box4 = new Box(580,160,40,40);
    box5 = new Box(620,160,40,40);
    box6 = new Box(600,120,40,40);
    ground3 = new Ground(1000,350,200,20);
    box7  = new Box(1000,300,40,40);
    box8  = new Box(1040,300,40,40);
    box9  = new Box(960,300,40,40);
    box10 = new Box(980,260,40,40);
    box11 = new Box(1020,260,40,40);
    box12 = new Box(1000,220,40,40);
    polygon = new Polygon(600,height,40,40);
    chain = new Chain(polygon.body,{x:200,y:200});
}

function draw(){
  
    background("white");
    Engine.update(engine);
    text(mouseX + ',' + mouseY, 10, 15); 
    textSize(20);
    fill("blue");
    text("Drag the polygon to destroy the blocks",300,30);
    text("SCORE:"+score,750,40);
    text("Press Space to get a second Chance to Play!!",184 ,320);
    
    
  
    
    
    ground.display();
    ground2.display();
    ground3.display();
    polygon.display();
    chain.display();  
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
}
function mouseDragged (){
  Matter.Body.setPosition(polygon.body, {x:mouseX,y:mouseY});  
}
function mouseReleased() {
    chain.fly();
  }

