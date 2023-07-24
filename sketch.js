var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState;
var car1,car2,car1Img,car2Img;
var cars;
var allPlayers;
var track;
var fuelImage;
var powerCoinImage;
var fuels;
var powerCoins;


function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Img = loadImage("./assets/car1.png");
  car2Img = loadImage("./assets/car2.png");
  track = loadImage("./assets/track.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);
  if (playerCount === 2){ game.update(1);
   }
if (gameState === 1) { game.play();
 }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
