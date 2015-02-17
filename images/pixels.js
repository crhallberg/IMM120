var pixelsSketch = function(sketch) {
  var img;
  sketch.preload = function() {
    with(sketch) {
      img = loadImage("https://farm7.staticflickr.com/6010/5918455954_0e630bc393_m_d.jpg");
    }
  }

  sketch.setup = function() {
    with(sketch) {
      createCanvas(240, 180).parent('pixels');
      img.loadPixels();
    }
  }

  sketch.draw = function() {
    with(sketch) {
      var mouseColor = img.get(floor(mouseX), floor(mouseY));
      loadPixels();
      for (var i = pixels.length; i--;) {
        if(colorMatch(mouseColor, img.pixels[i], 60)) {
          pixels[i] = img.pixels[i];
        } else {
          var b = saturation(img.pixels[i]);
          pixels[i] = [b, b, b, 255];
        }
      }
      updatePixels();
    }
  }
};

function colorMatch(color1, color2, threshold) {
  return Math.abs(color1[0]-color2[0]) < threshold
    && Math.abs(color1[1]-color2[1]) < threshold
    && Math.abs(color1[2]-color2[2]) < threshold
    && Math.abs(color1[3]-color2[3]) < threshold;
}

new p5(pixelsSketch);