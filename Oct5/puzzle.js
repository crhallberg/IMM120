// Runs first and once
function setup() {
    createCanvas(600, 500); // size
}

// Loops forever
function draw() {
    background(200);
    for (var i = 0; i < 14; i+=2) {
        var x = 150;
        var y = i * 100;
        while (x < width + 100) {
            if (overCircle(x, y, circleSize)) {
                if (isMousePressed) {
                    fill(0);
                } else {
                    fill('red');
                }
            } else {
                fill(255);
            }
            ellipse(x, y, circleSize, circleSize);
            x += 150;
        }
    }
    // ---------- NO ERRORS BELOW THIS LINE ----------
    noFill();
    rect(100, 50, width-200, height-100);
}

var circleSize = 100;
function overCircle(cx, cy, cd) {
    return dist(mouseX, mouseY, cx, cy) < cd / 2;
}
