float rectX;
float rectY;

void setup() {
  size(640, 480);
  background(200);
  float size = height/2;
  rectX = width/2 - size/2;
  rectY = (height-size)/2;
  rect(rectX, rectY, size, size);
  noLoop(); // only run draw() once
}

void draw() {
  int count = 0; // counter
  while (count < 100) {
    float insideX = random(rectX, rectX + height/2);
    float insideY = random(rectY, rectY + height/2);
    float outsideX = random(0, width);
    float outsideY = random(0, height);
    while (outsideX > rectX && outsideY > rectY && outsideX < rectX+(height/2) && outsideY < rectY+(height/2)) {
      outsideX = random(0, width);
      outsideY = random(0, height);
    }
    ellipse(outsideX, outsideY, 10, 10);  
    ellipse(insideX, insideY, 10, 10);
    line(insideX, insideY, outsideX, outsideY);
    
    count += 1;
  }
}