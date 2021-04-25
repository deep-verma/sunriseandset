const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
   var responseJson  = await response.json(); //java script object rotation
   var datetime = responseJson.datetime;
   var hour = datetime.slice(11,13);
   console.log(responseJson);
   console.log(hour);
   if(hour>=04 && hour<=05){
       bg = "sunrise1.png";
   }
   
   if(hour>=06 && hour<=07){
    bg = "sunrise2.png";
}

if(hour>=08 && hour<=09){
    bg = "sunrise3.png";
}
if(hour>=10&& hour<=11){
    bg = "sunrise4.png";
}
if(hour>=12 && hour<=13){
    bg = "sunrise5.png";
}
if(hour>=14 && hour<=15){
    bg = "sunrise6.png";
}
if(hour>=16 && hour<=17){
    bg = "sunset7.png";
}
if(hour>=18 && hour<=19){
    bg = "sunset8.png";
}
if(hour>=20 && hour<=21){
    bg = "sunset9.png";
}
if(hour>=22 && hour<=23){
    bg = "sunset10.png";
}
if(hour>=24 && hour<=01){
    bg = "sunset11.png";
}
if(hour>=02 && hour<=03){
    bg = "sunset12.png";
}



   backgroundImg = loadImage(bg);
}
