class Snowman
{
  float x, y;
  float prevX, lastX;
  
  Snowman() {
    this.x = width/2;
    this.prevX = this.x;
    this.lastX = this.prevX;
    this.y = height - 160;
  }
  
  void draw() {
    fill(255);
    stroke(0, 100);
    
    ellipse(this.x, this.y, 150, 160);         //Body
    ellipse(this.prevX, this.y-80, 100, 110); // Middle
    ellipse(this.lastX, this.y-140, 70, 75);  // Head
    
    // ARMS
    pushMatrix();
    translate(this.prevX, this.y-80);
    
    stroke(150, 100, 0);
    line(-40, -5, -120, -10);
    line(-110, -10, -112, -20);
    line(50, 0, 110, -12);
    
    popMatrix();
    
    // FACE
    pushMatrix();
    translate(this.lastX, this.y-140);
    
    fill(0);
    stroke(100);
    ellipse(-10, -8, 12, 12);
    ellipse(16, -14, 10, 10);
    ellipse(-20, 14, 8, 8);
    ellipse(-10, 20, 8, 8);
    ellipse(2, 22, 8, 8);
    
    // NOSE
    fill(200, 120, 0);
    noStroke();
    beginShape();
    vertex(10, -6);
    vertex(60, 0);
    vertex(10, 6);
    endShape(CLOSE);
    
    popMatrix();
    
    
    this.lastX = this.prevX;
    this.prevX = this.x;
    this.x = mouseY;
  }
}
