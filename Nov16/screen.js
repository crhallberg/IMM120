// Variables
var socket = window.io.connect('http://romeo.crhallberg.com:8120');
var room = 'white';

// Run once at the start
function setup() {
    var canvas = createCanvas(800, 600);

    socket.on('update', function (data) {
        stroke(data.color);
        line(data.px, data.py, data.x, data.y);
    });

    socket.emit('join', room);

    background(room);
    strokeWeight(5);
}

// Run forever after setup
function draw() {
}

function keyPressed() {
    background(room);
    socket.emit('clear', {
        room: room
    });
}

function randomColor() {
    return color('hsb(' + floor(random() * 360) + ', 100%, 80%)');
}
