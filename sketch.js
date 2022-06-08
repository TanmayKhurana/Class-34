const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,400,1200,20);
    box1 = new Box(900,200, 50, 50)
    box2 = new Box(900,200, 50, 50)
    box3 = new Box(900,200, 50, 50)
    box4 = new Box(900,200, 50, 50)
    box5 = new Box(900,200, 50, 50)
    box6 = new Box(900,200, 50, 50)
    box7 = new Box(800,200, 50, 50)
    box8 = new Box(800,200, 50, 50)
    box9 = new Box(800,200, 50, 50)
    box10 = new Box(800,200, 50, 50)
    box11 = new Box(800,200, 50, 50)
    box12 = new Box(800,200, 50, 50)
    box13 = new Box(700,200, 50, 50)
    box14 = new Box(700,200, 50, 50)
    box15 = new Box(700,200, 50, 50)
    box16 = new Box(700,200, 50, 50)
    box17 = new Box(700,200, 50, 50)
    box18 = new Box(700,200, 50, 50)
    box19 = new Box(700,200, 50, 50)
    box20 = new Box(700,200, 50, 50)

    ball = new Bird(550, 200, 50)

    slingshot = new SlingShot(ball.body,{x:500, y:50});
}

function draw(){
        background("white");
    
    
    Engine.update(engine);
    //strokeWeight(4);
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
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    
    ball.display();
    ground.display();
    //log6.display();
    slingshot.display();
   
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


