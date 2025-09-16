let body;
let face;
let n;

function preload() {
  body = loadImage('body.png');

  // get random face
  n = int(random(1, 5));
  let imgName = n + ".png";  
  face = loadImage(imgName);
}

function setup() {
  createCanvas(400, 400);

  let button = createButton('🤗');
  button.position(10, 10);

  button.mousePressed(() => {
    n = int(random(1, 5));
    let imgName = n + ".png";
    face = loadImage(imgName);
  });  
}

function draw() {
  background("white");
  image(body, 0, 0);
  image(face, 132, 134);

  if (n === 1) {
    background("beige");
  }
  if (n === 2) {
    background("red");
  }
  if (n === 3) {
    background("pink");
  }
  if (n === 4) {
    background("skyblue");
  }
}