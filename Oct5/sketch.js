// Variables    
var distanceBetween = 50;
var offset = 35;

// Runs first and once
function setup() {
    createCanvas(700, 500); // size
}

// Loops forever
function draw() {
    background(102);

    var count = 0;

    while (count < 60) {
        var x = count * distanceBetween + offset;
        ellipse(x, 250, 50, 50);

        println(count);
        count = count + 1;
    }

    // 100
    // 200
    // 300
    // 400
    // 500
    // 600

    rect(width - 20, 0, 20, 20);
}