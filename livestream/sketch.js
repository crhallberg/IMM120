// Prototyping an animation tool for a game

function setup() {
    createCanvas(600, 600);
    socket.on('drawcircle', function (data) {
        fill(255);
        ellipse(data.x, data.y, 30, 30);
    });
    socket.emit('join', room);
    background(200);
}

function draw() {} // empty
function mousePressed() {
    // when the mouse is clicked, send a "drawcircle"
    // to draw a circle where the mouse is
    // build an appropriate object
    var data = {
        room: room, // always send a room
        x: mouseX,
        y: mouseY
    };
    socket.emit('drawcircle', data);
    // Perform local drawing
    fill(0);
    ellipse(mouseX, mouseY, 20, 20);
}
