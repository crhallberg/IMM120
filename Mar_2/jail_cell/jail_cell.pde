int rectX = 200;
int rectY = 200;
int rectW = 200;
int rectH = 200;

void setup()
{
  size(600, 600);
  textAlign(CENTER);
  textSize(48);
  strokeWeight(9);
}

void draw()
{
  background(180);
  // If the mouse isn't in the cell, sound the alarm!
  if(!isInsideRect(mouseX, mouseY, rectX, rectY, rectW, rectH)) {
    int flash = (frameCount % 60) * 3; // frameCount is the number of times draw() has completed
    background(255, flash, flash);       // % 60 keeps it between 0 and 59, and loops about every two seconds because sketches aim for 30 frames per second
    text("PRISON BREAK!", width/2, 100); // * 3 to make it bright and noticable: 0 - 177
  }
  // Cell
  stroke(50);
  fill(255);
  rect(rectX, rectY, rectW, rectH);
  // Bed
  noStroke();
  fill(50, 80, 60);
  rect(rectX+10, rectY+10, 100, 50);
  // Pillow
  fill(240);
  rect(rectX+13, rectY+13, 30, 44);
}

// Copied from class
boolean isInsideRect(float x, float y, float rectX, float rectY, float rectW, float rectH)
{
  boolean answer = x > rectX && y > rectY && x < rectX+rectW && y < rectY+rectH;
  return answer;
}

