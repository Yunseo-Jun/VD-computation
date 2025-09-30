const GRID = 30;
const CELL = 1080 / GRID;

function setup() {
 createCanvas(1080, 1080);
 noStroke();
 frameRate(2);
//noLoop();
}

function draw() {
 background(0, 250, 250);
 const cz = random(0, 40);
 const ew = random(80, CELL);
 const eh = random(80, CELL*0.2);

 for (let gy = 0; gy < GRID; gy++) {

   for (let gx = 0; gx < GRID; gx++) {
     const cx = gx * CELL + CELL / 2;
     const cy = gy * CELL + CELL / 2;

     push();
     blendMode(DIFFERENCE);
     fill('green');
     circle(cx, cy, cz);
     pop();

     push();
     blendMode(SCREEN);
     translate(cx, cy);
     fill('pink');
     rectMode(CENTER);
     ellipse(cx, cy, ew, eh);
     pop();
   }
 }
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}