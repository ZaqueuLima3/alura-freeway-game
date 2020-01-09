// --- Cars settings
let xCars = [700, 700, 700, 700, 700, 700];
let yCars = [40, 96, 150, 210, 260, 320];
let speedCars = [2, 2.5, 3.2, 2.5, 3.2, 3.5];

function showCar() {
  for (let i = 0; i < imagesCars.length; i++) {
    image(imagesCars[i], xCars[i], yCars[i], 60, 40);
  }
}

function moveCar() {
  for (let i = 0; i < xCars.length; i++) {
    xCars[i] -= speedCars[i];
  }
}

function resetPositionInitial(x) {
  for (let i = 0; i < xCars.length; i++) {
    if (xCars[i] < -60) {
      xCars[i] = 700;
    }
  }
}
