// Variables
var socket = window.io.connect('http://romeo.crhallberg.com:8120');
var room = 'skyblue';

// Run once at the start
function setup() {
    var canvas = createCanvas(800, 600);

    socket.on('update', function (data) {
        stroke(data.color);
        line(data.px, data.py, data.x, data.y);
        console.log(data.id);
    });

    socket.on('erase', function (data) {
        fill(room);
        noStroke();
        ellipse(data.x, data.y, 100, 100);
    })

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
