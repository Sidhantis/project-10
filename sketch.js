

var ship , shipImage ,seaImage , sea ;
function preload(){
  seaImage = loadImage ("sea.png");
  shipImage = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage (seaImage);
  sea.velocityX = -3;
  sea.scale = 0.5;

  ship= createSprite (130,200,30,30);
  ship.addAnimation ("ship",shipImage);
  ship.scale = 0.25;
}

function draw() {
  background("blue");
  sea.velocityX = -3;
 if (sea.x < 0 ) {
      sea.x = sea.width/8;


 }
 drawSprites ();
}

