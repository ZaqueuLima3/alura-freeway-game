function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(imageRoad);

  showAvatar();
  showCar();

  moveAvatar();
  moveCar();

  resetPositionInitial();
}
