// Variables
var socket = window.io.connect('http://207.172.118.50:8120');
var room = 'touch';
var value = 0;

// Run once at the start
function setup() {
  var canvas = createCanvas(screen.width-40, screen.height-120).parent('sketch');
  socket.on("touch", function(data) {
    var t = data.data;
    if(t.length > 1) {
      print(t, t.length);
    }
    var wRatio = width/data.width;
    var hRatio = height/data.height;
    for(var i=0;i<t.length;i++) {
      ellipse(t[i].x*wRatio, t[i].y*hRatio, 50*wRatio, 50*wRatio);
    }
  });
  socket.emit('join', room);
}

function sendUpdate(msg, data) {
  packet = {room: room, data:data, width:width, height:height};
  socket.emit(msg, packet);
}

// Move your finger across the page
// to change its value

function draw() {
  if(touches.length > 0) {
    sendUpdate('touch', touches);
    background(255, 50);
    for(var i=0;i<touches.length;i++) {
      ellipse(touches[i].x, touches[i].y, 100, 100);
    }
  } else {
    background(0, 50);
  }
  fill(value);
  rect(25, 25, 50, 50);
}

function touchMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
  return false;
}