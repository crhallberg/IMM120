var angles = function(sketch) {
  var aslider;

  sketch.setup = function() {
    with(sketch) {
      createCanvas(300, 300).parent("angles");

      aslider = createSlider(0, TWO_PI*100, PI*100);
      aslider.position(0, 310);
      aslider.parent('angles');
      aslider.size(width);
    }
  }

  sketch.draw = function() {
    with(sketch) {
      background(200);

      fill(0);
      strokeWeight(1);
      var frameAngle = frameCount*PI/180;
      ellipse(sin(frameAngle)*(width/2-50)+width/2, 25, 25 ,25);
      ellipse(25, cos(frameAngle)*(height/2-50)+height/2, 25 ,25);
      ellipse(width/2+sin(frameAngle)*111, height/2+cos(frameAngle)*111, 10, 10);

      fill(255);
      strokeWeight(3);
      ellipse(width/2, height/2, 200, 200);
      stroke(0);
      var angle = aslider.value()/100;
      line(
        width/2  + sin(angle)*50,
        height/2 - cos(angle)*50,
        width/2  + sin(angle)*100,
        height/2 - cos(angle)*100
      );
    }
  }
}
new p5(angles);