const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var compbase;
var playerbase;
var Player;
var computer;

function preload() {
  compBaseImage = loadImage("assets/base2.png");
 playerImage = loadImage("assets/base1.png")
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  compbase = new compBase(900,300,180,150)
  playerbase = new playerBase(300,random(450,height-300),180,150)
  Player = new player(285,playerbase.body.position.y-100,50,80)
  computer = new Computer(900,compbase.body.position.y-100,50,80)
 }

function draw() {

  background(180);
 
  Engine.update(engine);
 
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   compbase.show();
   playerbase.show();
   Player.show();
   computer.show();
   //display Player and computerplayer
}



















