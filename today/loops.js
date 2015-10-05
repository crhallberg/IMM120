// Variables    
var distanceBetween = 20;
var offset = 35;

// Runs first and once
function setup() {
    createCanvas(700, 500); // size
}

// Loops forever
function draw() {
    background(102);
    
    for (var count = 0; count < 60; count++) {
        var x = count * distanceBetween + offset;
        ellipse(x, 100, count, 50);

        println(count);
    }

    var count = 0;
    while (count < 60) {
        var x = count * distanceBetween + offset;
        ellipse(x, 250, count, 50);

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