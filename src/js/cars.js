// --- Cars settings

// car 1
let xCar1 = 700;
let yCar1 = 40;
let speedCar1 = 2;

// car 2
let xCar2 = 700;
let yCar2 = 96;
let speedCar2 = 3;

// car 3
let xCar3 = 700;
let yCar3 = 150;
let speedCar3 = 2.5;

function showCar() {
  image(imageCar, xCar1, yCar1, 60, 40);
  image(imageCar2, xCar2, yCar2, 60, 40);
  image(imageCar3, xCar3, yCar3, 60, 40);
}

function moveCar() {
  xCar1 -= speedCar1;
  xCar2 -= speedCar2;
  xCar3 -= speedCar3;
}
