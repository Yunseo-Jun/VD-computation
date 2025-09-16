let body;
let face;

function preload() {
  body = loadImage('body.png');

  // get random face
  face = loadImage(int(random(1, 5)) + ".png");
}

function setup() {
  createCanvas(400, 400);
  background('yellow');
  image(body, 0, 0);
  image(face, 132, 134);
}
