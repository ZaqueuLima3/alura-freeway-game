// --- Cars settings
let xCars = [700, 700, 700, 700, 700, 700];
let yCars = [40, 96, 150, 210, 260, 320];
let speedCars = [2, 2.5, 3.2, 5, 3.2, 3.5];
let widthCar = 60;
let heightCar = 40;

function showCar() {
  for (i in imagesCars) {
    image(imagesCars[i], xCars[i], yCars[i], widthCar, heightCar);
  }
}

function moveCar() {
  for (i in imagesCars) {
    xCars[i] -= speedCars[i];
  }
}

function resetPositionInitial(x) {
  for (i in imagesCars) {
    if (passedTheDisplay(xCars[i])) {
      xCars[i] = 700;
    }
  }
}

function passedTheDisplay(xCar) {
  return xCar < -60;
}
