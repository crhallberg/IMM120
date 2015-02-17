var spin = function (sketch) {
  sketch.setup = function() {
    with(sketch) {
      var arrowCanvas = createCanvas(300, 300);
      arrowCanvas.parent('spin');
      angleMode(DEGREES);
    }
  }

  sketch.draw = function() {
    with(sketch) {
      background(255);

      fill(255, 0, 0);
      push();
      translate(150, 75);
      rotate(frameCount);
      line(-100, 0, 100, 0);
      line(0, -100, 0, 100);
      rect(0, 0, 60, 80);
      pop();

      fill(0, 255, 0);
      push();
      rotate(frameCount);
      translate(150, 150);
      line(-100, 0, 100, 0);
      line(0, -100, 0, 100);
      rect(0, 0, 60, 80);
      pop();

      fill(0, 0, 255);
      push();
      translate(150, 225);
      rotate(frameCount);
      line(-100, 0, 100, 0);
      line(0, -100, 0, 100);
      rect(-30, -40, 60, 80);
      pop();
    }
  }
}
new p5(spin);