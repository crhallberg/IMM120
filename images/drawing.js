var drawingSketch = function (sketch) {
  var img;

  sketch.preload = function() {
    with(sketch) {
      img = loadImage('http://upload.wikimedia.org/wikipedia/commons/7/72/Craters_of_the_Moon_from_space.jpg');
    }
  };

  sketch.setup = function() {
    with(sketch) {
      createCanvas(500, 500).parent('drawing');
    }
  };

  sketch.draw = function() {
    with(sketch) {
      background(234);
      var w = img.width/2;
      var h = img.height/2;
      image(img, (width-w)/2, (height-h)/2, w, h);
    }
  };
};

new p5(drawingSketch);