var socket = window.io.connect('http://romeo.crhallberg.com:8120');
var room = 'background';
var bgcolor = 'white';

function setup() {
    createCanvas(640, 480);
    
    socket.on('background', function(data) {
        bgcolor = data.bgcolor;
    })
    
    socket.on('sticker', function(data) {
        var n = data.number;
        // draw image
    })
    
    socket.emit('join', room);
}

function draw() {
    background(bgcolor);
    drawButton(200, 240, 'red');
    drawButton(400, 240, 'blue');
}

function drawButton(x, y, c) {
    fill(c)
    ellipse(x, y, 100, 100);
    if (mouseIsPressed && dist(mouseX, mouseY, x, y) < 50) {
        socket.emit('background', {
            room: room,
            bgcolor: bgcolor
        });
    }
}