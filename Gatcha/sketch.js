let body;
let face;

function preload() {
  body = loadImage('body.png');

  // get random face
  let n = int(random(1, 5));
  let imgName = n + ".png";  
  face = loadImage(imgName);
}

function setup() {
  createCanvas(400, 400);

  let button = createButton('🤗');
  button.position(10, 10);

  button.mousePressed(() => {
    let n = int(random(1, 5));
    let imgName = n + ".png";
    face = loadImage(imgName);
  });  
}

function draw() {
  background("white");
  image(body, 0, 0);
  image(face, 132, 134);

  if (n === 1) {
    document.body.style.backgroundColor = "beige";
    }

  if (n === 2) {
    document.body.style.backgroundColor = "red";
    }

  if (n === 3) {
    document.body.style.backgroundColor = "pink";
    }

  if (n === 4) {
    document.body.style.backgroundColor = "skyblue";
    }
}