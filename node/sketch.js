// Variables
var socket = window.io.connect('http://207.172.118.50:8120');
var players = [];
var me;
var room = 'main';

// Run once at the start
function setup() {
  var canvas = createCanvas(800, 600).parent('sketch');

  me = new Player();

  // Player update
  socket.on('update', function (data) {
    // print('update', data);
    // Make a new Player
    if(!players[data.id]) {
      players[data.id] = new Player();
    }
    players[data.id].update(data);
  });

  socket.emit('join', room);

  background(255);
  strokeWeight(3);
}

// Run forever after setup
function draw() {
//  background(255, 255, 255, 3);
  me.move();

  stroke(200);
  fill(255);
  ellipse(width-50, 50, 50, 50);
}

function sendUpdate(data) {
  data.x = mouseX;
  data.y = mouseY;
  data.room = room;

  socket.emit('update', data);
}

function keyPressed() {
  me.color = [random(0,255), random(0,255), random(0,255)];
  sendUpdate({color:me.color});
}
function mousePressed() {
  me.down = true;
  sendUpdate({color:me.color, down:true});

  if(dist(mouseX, mouseY, width-50, 50) < 25) {
    background(255);
  }
}
function mouseReleased() {
  me.down = false;
  sendUpdate({color:me.color, down:false});
}

function Player()
{
  this.x = 0;
  this.y = 0;
  this.prevx = 0;
  this.prevy = 0;
  this.color = [random(0,255), random(0,255), random(0,255)];
  this.down = false;
  sendUpdate({color:this.color, down:false});
}
Player.prototype.draw = function() {
  if(this.down) {
    stroke(this.color);
    line(this.prevx, this.prevy, this.x, this.y);
  }
}
Player.prototype.move = function() {
  this.prevx = this.x;
  this.prevy = this.y;
  this.x = mouseX;
  this.y = mouseY;
  sendUpdate({});

  noStroke();
  fill(this.color);
  ellipse(50, 50, 50, 50);
  this.draw();
}
Player.prototype.update = function(data) {
  this.prevx = this.x;
  this.prevy = this.y;
  this.x = data.x;
  this.y = data.y;
  if(typeof data.color != "undefined") this.color = data.color;
  if(typeof data.down != "undefined") this.down = data.down;

  this.draw();
}
