// Variables
var socket = window.io.connect('http://romeo.crhallberg.com:8120');
var room = 'white';
var colors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'indigo', 'purple', 'pink', 'brown', 'black', 'gray'];
var myColor;
var currentColor = Math.floor(Math.random()*colors.length);

// Run once at the start
function setup() {
    var canvas = createCanvas(800, 600);

    socket.on('clear', function () {
        background(room);
    });

    socket.emit('join', room);

    background(room);
    strokeWeight(5);

    myColor = colors[currentColor];
}

// Run forever after setup
function draw() {
    fill(myColor);
    stroke(myColor);
    ellipse(50, 50, 50, 50);
    if (mouseIsPressed) {
        var data = {
            room: room,
            color: myColor,
            px: pmouseX,
            py: pmouseY,
            x: mouseX,
            y: mouseY
        }
        line(pmouseX, pmouseY, mouseX, mouseY);
        socket.emit('update', data);
    }
}

function keyPressed() {
    if (key == ' ') {
        background(room);
    } else {
        currentColor++;
        if (currentColor >= colors.length) {
            currentColor = 0;
        }
        myColor = colors[currentColor];
    }
}
