// --- Avatar settings
let xAvatar = 100;
let yAvatar = 366;

function showAvatar() {
  image(avatar, xAvatar, yAvatar, 30, 30);
}

function moveAvatar() {
  if (keyIsDown(UP_ARROW)) {
    yAvatar -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAvatar += 3;
  }
}
