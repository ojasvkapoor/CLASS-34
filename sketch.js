const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26;
var hero,monster,rope,ground , bg , bgImg;

function preload() {
  bgImg = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
   Ground = new Ground(600, 600, 1200, 20);

  Hero = new Hero(400,800,250);
  Rope = new Rope(Hero.body, { x: 500, y: 50 });
  Monster = new Monster(1100,550,300);

  Box1 = new Box(600, 100, 70, 70);
  Box2 = new Box(900, 100, 70, 70);
  Box3 = new Box(900, 100, 70, 70);
  Box4 = new Box(900, 100, 70, 70);
  Box5 = new Box(900, 100, 70, 70);
  Box6 = new Box(900, 100, 70, 70);
  Box7 = new Box(800, 100, 70, 70);
  Box8 = new Box(800, 100, 70, 70);
  Box9 = new Box(800, 100, 70, 70);
  Box10 = new Box(800, 100, 70, 70);
  Box11 = new Box(800, 100, 70, 70);
  Box12 = new Box(800, 100, 70, 70);
  Box13 = new Box(800, 100, 70, 70);
  Box14 = new Box(800, 100, 70, 70);
  Box15 = new Box(700, 100, 70, 70);
  Box16 = new Box(700, 100, 70, 70);
  Box17 = new Box(700, 100, 70, 70);
  Box18 = new Box(700, 100, 70, 70);
  Box19 = new Box(700, 100, 70, 70);
  Box20 = new Box(700, 100, 70, 70);
  Box21 = new Box(600, 100, 70, 70);
  Box22 = new Box(600, 100, 70, 70);
  Box23 = new Box(600, 100, 70, 70);
  Box24 = new Box(600, 100, 70, 70);
  Box25 = new Box(600, 100, 70, 70);
  Box26 = new Box(600, 100, 70, 70);

}

function draw() {
  background(bgImg);
  Engine.update(engine);
  Ground.display();
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display()
  Box5.display()
  Box6.display()
  Box7.display()
  Box8.display()
  Box9.display()
  Box10.display()
  Box11.display()
  Box12.display()
  Box13.display()
  Box14.display()
  Box15.display()
  Box16.display()
  Box17.display()
  Box18.display()
  Box19.display()
  Box20.display()
  Box21.display()
  Box22.display()
  Box23.display()
  Box24.display()
  Box25.display()
  Box26.display()

  Hero.display();
  Rope.display();
  Monster.display();

}

function mouseDragged() {
  Matter.Body.setPosition(Hero.body, { x: mouseX, y: mouseY });
}