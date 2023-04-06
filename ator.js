let xAtor = 100;
let yAtor = 370;
let colisao = false;
let points = 0;

function ator(){
  image(cow, xAtor, yAtor, 30, 30);
}

function mAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 5;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(yAtor < 370){
      yAtor += 5;
    }
  }
}

function collide(){
  for (let i = 0; i < cars.length; i++){
    colisao = collideRectCircle(xCar[i], yCar[i], wCar, hCar, xAtor, yAtor, 15);
    if (colisao){
      yAtor = 370;
      if(points > 0){
        points -= 1;
      }
    }
  }
}

function placar(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(points, width / 5, 27);
}

function addPoints(){
  if(yAtor < 15){
    points += 1;
    yAtor = 370;
  }
}