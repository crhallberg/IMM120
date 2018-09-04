var connected = false;
var penColor = 0;
var palette = [
  "#000",
  "#f00",
  "orange",
  "#ff0",
  "#0f0",
  "#00f",
  "#f0f",
  "#fff",
];

function setup() {
  createCanvas(800, 480);

  background(255);
}

function draw() {
  // NOTHIN'
  if (saving) {
    points.push({
      x: mouseX,
      y: mouseY
    });
    strokeWeight(1);
    stroke(palette[penColor]);
    drawPath(points);
  }
  var wd = width / palette.length;
  noStroke();
  for (var i = 0; i < palette.length; i++) {
    fill(palette[i]);
    rect(wd * i, height - 50, wd, 50);
  }
  stroke(255);
  strokeWeight(5);
  fill(0);
  ellipse(wd * penColor + wd / 2, height - 25, 25);
  
  if (!connected) {    
    background(200);
    textAlign(CENTER);
    strokeWeight(2);
    text("Connecting...", width / 2, height / 2);
  }
}

var saving = false;
var points = [];

function mousePressed() {
  if (mouseY > height - 50) {
    penColor = floor(mouseX / (width / palette.length));
  } else {
    saving = true;
    points = [];
  }
}

function mouseReleased() {
  if (saving) {
    saving = false;
    socket.emit("trail", {
      color: penColor,
      path: points
    });
  }
}

function keyPressed() {
  background(255);
}

function drawPath(path) {
  for (var i = 1; i < path.length; i++) {
    line(path[i].x, path[i].y, path[i - 1].x, path[i - 1].y);
  }
}

var socket = io("http://raw.crhallberg.com:3120");
socket.on("hello", function (data) {
  connected = true;
  background(255);
  socket.emit("join", "banana");
});
socket.on("trail", function (packet) {
  console.log("trail", packet);
  strokeWeight(3);
  stroke(palette[packet.color]);
  drawPath(packet.path);
});
