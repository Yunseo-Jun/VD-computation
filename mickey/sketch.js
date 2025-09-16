function setup() {
  createCanvas(600, 800);
  background(200);
  noStroke();
}

function draw() {
  background(mouseX/2.35);

  // ears
  fill('black');
  circle(315,90,136);
  circle(200,188,136);

  //face1
  fill('black');
  circle(341,230,170);

  //body1
  fill('black');
  circle(350,350,150);

  //face1.5
  fill('#F4E2C2');
  circle(360,230,135);

  //face2
  fill('#F4E2C2');
  circle(420,260,70);

  //eyes-white
  fill('white');
  circle(365,195,50);
  circle(415,205,30);

  //eyes-black
  fill('black');
  circle(360,205,30);
  circle(410,210,20);

  //nose
  circle(440,244,40); 

  //mouth
  fill('red');
  circle(340,260,54);  

  //body 1
  circle(380,430,194);

  //buttons
  fill('black');
  circle(463,405,48);
  circle(413,424,48);

  //feet
  fill('yellow');
  circle(169,612,180);
  circle(423,679,180);
}
