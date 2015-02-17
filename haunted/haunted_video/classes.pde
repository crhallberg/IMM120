// Cloud object
class Cloud {
  float x, y, size, layer;
  Cloud(int id) {
    this.layer = id*6/cloudCount;
    this.size = random(80, 150);
    this.x = random(-this.size, width);
    this.y = 100-random(0, this.size);
  }
  void draw() {
    noStroke();
    if (this.layer < 4 && lightning > 0 && random(10) > 5) {
      fill(255);
    } else {
      fill(10*this.layer, 200);
    }
    ellipse(this.x, this.y - 20*this.layer, this.size, this.size);
    this.x += this.layer;
    if (this.x > width+this.size) {
      this.x = -this.size;
    }
  }
}

// Lightning object
class Lightning {
  PVector[] trail;
  int life;

  Lightning() {
    this.life = 60;
    float x = random(100, width-100);
    float y = 0;
    this.trail = new PVector[1];
    this.trail[0] = new PVector(x, y);    
    while (y < height) {
      x += (noise(x)-.5) * 200;
      y += noise(y)*30 + 50;
      this.trail =(PVector[]) append(this.trail, new PVector(x, y));
    }
  }
  void draw() {
    if (this.life <= 0) {
      return;
    }
    strokeWeight(5);
    stroke(255, this.life*4);
    for (int i=1; i<this.trail.length; i++) {
      line(this.trail[i-1].x, this.trail[i-1].y, this.trail[i].x, this.trail[i].y);
    }
    strokeWeight(1);
    this.life--;
  }
}

