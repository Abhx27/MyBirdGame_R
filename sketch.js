const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var sea, backgroundImage;

function preload(){

}
function setup(){
createCanvas(displayWidth - 30,displayHeight - 200);
background(204, 233, 246)



//sea = createSprite(1080,800,1670,200)
//sea.shapeColor = "blue"



land = new Land(190,770,400,400);
sea = new Sea(1080,800,1670,200);


}

function draw(){

    drawSprites()

    land.display();
}