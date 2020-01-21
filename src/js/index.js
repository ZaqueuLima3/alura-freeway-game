function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(imageRoad);

  showAvatar();
  showCar();

  moveAvatar();
  moveCar();

  resetPositionInitial();

  verifyCollide();

  showScore();
  addScore();
}
