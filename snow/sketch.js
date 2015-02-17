var snow = [];

function setup()
{
  createCanvas(windowWidth, windowHeight).parent('sketch');
  var snowCount = 100;
  for(var i=0;i<snowCount;i++) {
    snow[i] = new Snow(i*windowWidth/snowCount);
  }
  strokeWeight(3);
  stroke(255);
}

function draw()
{
  background(0);
  for(var i=0;i<snow.length;i++) {
    snow[i].draw();
  }
}

function Snow(x)
{
  this.x = x + random(-30, 30);
  this.y = 0;
  this.speed = random(2, 9);
  this.spin = random(0, TWO_PI);
}
Snow.prototype.draw = function()
{
  push();

  translate(this.x, this.y);
  rotate(this.spin);
  for(var i=0;i<6;i++) {
    rotate(PI/3);
    line(0,0,15,0);
    line(8,0,13,5);
    line(8,0,13,-5);
  }

  pop();

  this.y += this.speed;
  this.spin += this.speed/100;

  if(this.y > height+20) this.y = -20;
}