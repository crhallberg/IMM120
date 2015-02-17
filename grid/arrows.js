var arrows = function (sketch) {
  var sliderX, sliderY;
  var labelX, labelY;

  sketch.setup = function() {
    with(sketch) {
      var arrowCanvas = createCanvas(300, 300);
      arrowCanvas.parent('arrows');

      sliderX = createSlider(0, width, width/2);
      sliderX.position(40, 310);
      sliderX.parent('arrows');
      sliderX.size(240);
      labelX = createSpan('x:');
      labelX.position(20, 310);
      labelX.parent('arrows');

      sliderY = createSlider(0, width, width/2);
      sliderY.position(40, 335);
      sliderY.parent('arrows');
      sliderY.size(240);
      labelY = createSpan('y:');
      labelY.position(20, 335);
      labelY.parent('arrows');

      textAlign(CENTER);
    }
  }

  sketch.draw = function() {
    with(sketch) {
      background(255);

      strokeWeight(3);
      stroke(200, 0, 0);
      line(15, 0, 15, height-10);
      line(5, height-20, 15, height-10);
      line(25, height-20, 15, height-10);

      stroke(0, 0, 200);
      line(0, 15, width-10, 15);
      line(width-20, 5, width-10, 15);
      line(width-20, 25, width-10, 15);

      stroke(0);
      var x = sliderX.value();
      var y = sliderY.value();
      ellipse(x, y, 20, 20);
      strokeWeight(1);
      text(sliderX.value(), x-30, y);
      text(sliderY.value(), x+30, y);
    }
  }
}
new p5(arrows);