var movingrect
var fixedrect
function setup() {
  createCanvas(800,400);

movingrect=  createSprite(400, 200, 50, 50);
fixedrect=createSprite(400,200,50,50);
movingrect.shapeColor="red"
fixedrect.shapeColor="red"
movingrect.debug=true
fixedrect.debug=true
}

function draw() {
  background(0);  
  movingrect.x=mouseX
  movingrect.y=mouseY
  drawSprites();
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
    && movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
    movingrect.shapeColor="blue"
fixedrect.shapeColor="blue"
  }
  else{
    movingrect.shapeColor="red"
fixedrect.shapeColor="red"
  }
}
