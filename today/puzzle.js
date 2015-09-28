var moon;
var moonWidth = 251;
var moonHeight = 250;
var angle = 0;

function setup() {
  createCanvas(600, 600);
  moon = loadImage('newmoon.png');
}

function draw() {
  drawMoon();

  background(0);

  if (isMousePressed) {
    angle == angle + 2;
  }
}

function drawMoon() {
  push();

  translate(mouseX, mouseY);
  rotate(radians(angle));
  image(moon, -moonWidth/2, -moonHeight/2);

  pop();
}
