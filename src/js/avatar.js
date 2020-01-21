// --- Avatar settings
let xAvatar = 100;
let yAvatar = 370;
let hit = false;
let myScore = 0;

function showAvatar() {
  image(avatar, xAvatar, yAvatar, 30, 30);
}

function moveAvatar() {
  if (keyIsDown(UP_ARROW) && yAvatar > 0) {
    yAvatar -= 3;
  }
  if (keyIsDown(DOWN_ARROW) && yAvatar < 370) {
    yAvatar += 3;
  }
}

function verifyCollide() {
  for (i in imagesCars) {
    hit = collideRectCircle(
      xCars[i],
      yCars[i],
      widthCar,
      heightCar,
      xAvatar,
      yAvatar,
      15
    );
    if (hit) {
      backAvatarInitialPosition();
      collide.play();
      if (scoreMoreThanZero()) myScore--;
    }
  }
}

function backAvatarInitialPosition() {
  yAvatar = 370;
}

function showScore() {
  textSize(25);
  textAlign(CENTER);
  fill(color(255, 240, 60));
  text(myScore, width / 5, 27);
}

function addScore() {
  if (yAvatar < 15) {
    myScore++;
    score.play();
    backAvatarInitialPosition();
  }
}

function scoreMoreThanZero() {
  return myScore > 0;
}
