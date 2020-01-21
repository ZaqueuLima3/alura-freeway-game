let imageRoad;
let avatar;
let imageCar1;
let imageCar2;
let imageCar3;

// songs
let trilha;
let collide;
let score;

function preload() {
  imageRoad = loadImage("./assets/images/road.png");
  avatar = loadImage("./assets/images/avatar-1.png");
  imageCar1 = loadImage("./assets/images/car-1.png");
  imageCar2 = loadImage("./assets/images/car-2.png");
  imageCar3 = loadImage("./assets/images/car-3.png");
  imagesCars = [
    imageCar1,
    imageCar2,
    imageCar3,
    imageCar1,
    imageCar3,
    imageCar2
  ];

  trilha = loadSound("./assets/songs/trilha.mp3");
  collide = loadSound("./assets/songs/colidiu.mp3");
  score = loadSound("./assets/songs/pontos.wav");
}
