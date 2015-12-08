// Variables
var socket = window.io.connect('http://romeo.crhallberg.com:8120');
var room = 'skyblue';
var players = [];
var x = 300;
var y = Math.random()*600;

function setup() {
    createCanvas(600, 600);

    socket.emit('join', room);

    socket.on('update', playerHandle);

    socket.on('imalive', function(data) {
        if (!players[data.id]) {
            players[data.id] = {
                x: 300,
                y: data.y
            };
        }
    });
    socket.emit('imalive', {room:room, y:y});

    socket.on('quit', function (id) {
        delete players[id];
    });

    background('azure');
}

function playerHandle(data) {
    if (!players[data.id]) {
        players[data.id] = {
            x: 300,
            y: Math.random()*height
        };
    }
    if (data.left) {
        players[data.id].x -= 10;
    } else if (data.right) {
        players[data.id].x += 10;
    }
}

function draw() {
    background(room);
    fill('darkblue');
    for (var i in players) {
        ellipse(players[i].x, players[i].y, 30, 30);
    }

    fill('red');
    ellipse(x, y, 40, 40);
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        x += 10;
        socket.emit('update', {room:room, right:true});
    } else if (keyCode === LEFT_ARROW) {
        x -= 10;
        socket.emit('update', {room:room, left:true});
    }
}
