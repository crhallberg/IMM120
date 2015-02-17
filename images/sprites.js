var spriteSketch = function(sketch) {
  var img, sprite;
  var frame = 0;
  sketch.preload = function() {
    with(sketch) {
      img = loadImage("./dancing.png");
    }
  }

  sketch.setup = function() {
    with(sketch) {
      createCanvas(640, 180).parent('sprites');
      sprite = new Sprite(img, 52, 52, 2, 0, [22]);
    }
  }

  sketch.draw = function() {
    with(sketch) {
      background(255);
      image(img, 0, 0);
      if(frameCount % 4 === 0) {
        frame++;
      }
      sprite.draw((width-sprite.width())/2, (height-sprite.height())/2, 0, frame);
    }
  }
  
  function Sprite(img, fw, fh, cs, rs, fc)
  {
    this.sheet = img;
    this.fWidth = fw;
    this.fHeight = fh;
    this.cellSpacing = cs + fw;
    this.rowSpacing = rs + fh;
    this.frameCounts = fc;
  }
  Sprite.prototype.width = function() {
    return this.fWidth;
  };
  Sprite.prototype.height = function() {
    return this.fHeight;
  };
  Sprite.prototype.draw = function(x, y, animation, frame) {
    frame %= this.frameCounts[animation];
    var s = this.sheet.get(
      frame*this.cellSpacing,
      animation*this.rowSpacing,
      this.fWidth,
      this.fHeight
    );
    sketch.image(s, x, y);
  };
};

new p5(spriteSketch);