//Create variables here
var dog_img, happyDog_img, dog, happyDog, database, foodS, foodStock, x;

function preload()
{
  //load images here
  dog_img = loadImage("images/dogImg.png");
  happyDog_img = loadImage("images/dogImg1.png");
  }

function setup() {
  createCanvas(500, 500);
  database = firebase.database();


  dog_img.size = (5);
  dog = createSprite(250,250,5,5);
  dog.addImage(dog_img);

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

  
}


function draw() {  
  background(46, 139, 87)

  if(keyIsDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog_img);
  }

  drawSprites();
  //add styles here
  fill("black");
  //text("You have " + foodStock + " remaining.", 50, 30);

}



function readStock(data){
  foodS=data.val();
}



function writeStock(data){
  
  if(x>0){
    x = data -1;
  }
  else{
    x = 0;
  }
  
  database.ref('/').update({
    Food:x
  })

}