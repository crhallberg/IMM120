var sliderX2, sliderY2, sliderR;
var labelX2, labelY2, labelR;
var pushButton, popButton;
var fakeStack = [];
var stackLength;

function setup() {
  var matrixCanvas = createCanvas(300, 300);
  matrixCanvas.parent('matrix');

  sliderX2 = createSlider(0, width, 1);
  sliderX2.parent('matrix');
  sliderX2.position(40, 310);
  sliderX2.size(240);
  labelX2 = createSpan('x:');
  labelX2.parent('matrix');
  labelX2.position(20, 310);

  sliderY2 = createSlider(0, width, 1);
  sliderY2.parent('matrix');
  sliderY2.position(40, 335);
  sliderY2.size(240);
  labelY2 = createSpan('y:');
  labelY2.parent('matrix');
  labelY2.position(20, 335);

  sliderR = createSlider(0, TWO_PI*1000, 1);
  sliderR.position(40, 360);
  sliderR.parent('matrix');
  sliderR.size(240);
  labelR = createSpan('&theta;:');
  labelR.position(20, 360);
  labelR.parent('matrix');

  pushButton = createButton('push()');
  pushButton.parent('matrix');
  pushButton.position(90, 385);
  pushButton.mousePressed(function() {
    fakeStack.push({
      x:sliderX2.value(),
      y:sliderY2.value(),
      r:sliderR.value(),
    });
    stackLength.html('Stack Length: '+fakeStack.length);
  });

  popButton = createButton('pop()');
  popButton.parent('matrix');
  popButton.position(180, 385);
  popButton.mousePressed(function() {
    var matrix = fakeStack.pop();
    sliderX2.value(matrix.x);
    sliderY2.value(matrix.y);
    sliderR.value(matrix.r);
    stackLength.html('Stack Length: '+fakeStack.length);
  });

  stackLength = createSpan('Stack Length: 0');
  stackLength.parent('matrix');
  stackLength.position(105, 415);

  strokeWeight(2);
}

function draw() {
  background(255);

  translate(sliderX2.value(), sliderY2.value());
  rotate(sliderR.value()/1000);

  // Blue square
  fill(0, 0, 200, 50);
  rect(0, 0, width, height);
  // Positive lines
  stroke(0, 0, 200, 100);
  for(var i=-width; i<width; i+=20) {
    line(0, i, width, i);
    line(i, 0, i, height);
  }
  // Negative lines
  stroke(200, 0, 0, 100);
  for(i=-width; i<width; i+=20) {
    line(0, -i, -width, -i);
    line(-i, 0, -i, -height);
  }

  stroke(0);
  fill(255);
  rect(100, 100, 50, 50);
  ellipse(200, 100, 30, 30);
  triangle(150, 200, 200, 240, 200, 160);

  // The Four Boxes
  rect(25, 25, 25, 25);
  rect(25, -50, 25, 25);
  rect(-50, 25, 25, 25);
  rect(-50, -50, 25, 25);

  noFill();
  ellipse(0, 0, 40, 40);
}