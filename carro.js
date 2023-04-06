let xCar = [600, 600, 600, 600, 600, 600];
let yCar = [40, 96, 150, 210, 270, 318];
let vCar = [3, 4.5, 5.5, 6, 3.5, 2.5];
let wCar = 50;
let hCar = 40;

function car(){
  for (let i = 0; i < cars.length; i++){
    image(cars[i], xCar[i], yCar[i], wCar, hCar);
  }
}

function mCar(){
  for (let i = 0; i < cars.length; i++){
    xCar[i] -= vCar[i];
  }
}

function onScreen(){
  for (let i = 0; i < cars.length; i++){
    if (outScreen(xCar[i])){
      xCar[i] = 600;
    }
  }
}

function outScreen(xCar){
  return xCar < - 50;
}





