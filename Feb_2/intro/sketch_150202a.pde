void setup() // Run once and first
{
  size(600, 600); // width = 600, height = 600
}

void draw() // Looped FOREVER
{
  background(180);
  // == (equals), < (less than), > (greater than)
  // ! (not), != (not equal to) , <= (< or ==), >= (> or ==)
  if (mousePressed == true) 
  {
    background(255, 100, 0);
  }
  line(0, 300, width, 300);

  fill(255, 255, 0);   // Inside
  stroke(255, 0, 0); // Outline
  ellipse(mouseX, mouseY, 100, 200);
  ellipse(width-mouseX, mouseY, 80, 160);

  if (keyCode == SHIFT)
  {
    // Nose
    fill(100, 200);   // Inside
    noStroke();
    rect(250, 250, 100, 100);
  }

  stroke(255, 0, 0); // Outline
  line(100, 400, width/2, 450);
  line(width-100, 400, width/2, 450);
}

//  5 + 5 ~ plus
//  5 - 5 ~ sub
//  5 * 5 ~ times
//  5 / 5 ~ divide

