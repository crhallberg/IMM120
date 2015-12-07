// Variables
var socket = window.io.connect('http://romeo.crhallberg.com:8120');
var room = 'skyblue';

function setup() {
    createCanvas(600, 600);

    socket.on('update', function (data) {
        fill('blue');
        ellipse(data.x, data.y, 80, 80);
    });

    socket.emit('join', room);

    background('white');
}

function draw() {
    fill('red');
    ellipse(mouseX, mouseY, 100, 100);

    socket.emit('update', {x:mouseX, y:mouseY});
}
