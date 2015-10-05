var moon;
var moonWidth = 251;
var moonHeight = 250;
var angle = 0;

function setup() {
    createCanvas(600, 600);
    moon = loadImage('moon.png'); // Wrong name
}

function draw() {
    background(0);

    drawMoon(); // Drawn before background

    if (isMousePressed) {
        angle = angle + 1; // == not =
    }
}

function drawMoon() {
    push();

    translate(mouseX, mouseY);
    rotate(radians(angle)); // rotated first
    image(moon, -moonWidth / 2, -moonHeight / 2, moonWidth, moonHeight); // size not given

  pop();
}
