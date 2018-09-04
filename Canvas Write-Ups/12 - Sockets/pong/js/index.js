var socket = io("http://raw.crhallberg.com:3120");
var connected = false;
var started = false;
var ball = {
  x: 300,
  y: 200,
  vx: 5,
  vy: 5,
}
var playerID = Math.random();
var playerTwo = 150;

function setup() {
  createCanvas(600, 400);

  fill(255);
  noStroke();
}

function draw() {  
  background(0);
  
  ellipse(ball.x, ball.y, 30);
  if (started) {
    ball.x += ball.vx;
    ball.y += ball.vy;
    if (ball.x < 0 || ball.x > width) {
      ball.vx *= -1;
    }
    if (ball.y < 0 || ball.y > height) {
      ball.vy *= -1;
    }
  }
  
  rect(0, mouseY - 50, 10, 100);
  rect(width - 10, playerTwo, 10, 100);
  socket.emit("paddle", {
    id: playerID,
    pos: mouseY - 50
  });
}

function mousePressed() {
  socket.emit("start", playerID);
}
socket.on("start", function(data) {
  if (playerID != data) {
    ball.vx *= -1;
  }
  started = true;
});
socket.on("paddle", function(data) {
  if (playerID != data.id) {
    playerTwo = data.pos;
  }
});
 // Connect
socket.on("hello", function(data) {
  connected = true; 
  socket.emit("join", "bad-drawing-tablet"); // CHANGE ROOM
});
socket.on("click", function(data) {
  console.log("click", data);
  ellipse(data.x, data.y, 10);
});