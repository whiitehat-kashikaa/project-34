const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var back;
var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, ground;
var holder, superhero, monster;

function preload(){
}

function setup(){
    createCanvas(2000, 700);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,600,900,20);
    block1 = new Block(400, 100, 50, 50);
    block2 = new Block(400, 100, 50, 50);
    block3 = new Block(400, 100, 50, 50);
    block4 = new Block(400, 100, 50, 50);
    block5 = new Block(400, 100, 50, 50);
    block6 = new Block(500, 100, 50, 50);
    block8 = new Block(500, 100, 50, 50);
    block7 = new Block(500, 100, 50, 50);


    superhero = new Super(190, 600, 90);
    monster = new Monster(500, 200, 90);



    holder = new String(superhero.body, {x : 0, y : 0});

}

function draw(){
    background("skyblue");
    Engine.update(engine);
    
    superhero.display();

    monster.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display(); 
    block5.display(); 
    block6.display();
    block7.display(); 
    block8.display();

   ground.display();
}

function mouseDragged(){
    Matter.Body.setPosition(superhero.body, { x : mouseX , y : mouseY });
}