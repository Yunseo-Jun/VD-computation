function setup() {
  createCanvas(600, 800);
  background(50);
  noStroke();
}

function draw() {

  // background(mouseX/2.35);

  //hair
  fill('skyblue');

  triangle(200, 260, 300, 200, 220, 110);
  triangle(310, 200, 400, 260, 380, 110);
  triangle(190, 420, 220, 250, 120, 270);
  triangle(380, 250, 410, 420, 475, 270);


  // ears
  noStroke();
  fill('#F4E2C2');
  circle(440,440,80);
  circle(160,440,80);

  //face
  fill('#F4E2C2');
  ellipse(300, 400, 270, 400);

  //mouth
  fill('#a52a2a');
  ellipse(300, 500, 150, 50);
  
  //tooth
  fill('#f5f5dc');
  circle(290,485,20);
  circle(310,485,20);
  circle(330,485,20);
  circle(270,485,20);

  circle(290,515,20);
  circle(310,515,20);
  circle(330,515,20);
  circle(270,515,20);
  
  //eyes
  fill('white');
  circle(248,350,100);
  circle(355,350,100);

  //eyes
  fill('black');
  circle(248,350,10);
  circle(355,350,10);

  //eyebrow
  stroke('skyblue');
  strokeWeight(20);

  line(220, 300, 390, 300);
  
}