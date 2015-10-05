// Variables   
var circleSize = 80;
var circleSizes = [];
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];

// Runs first and once
function setup() {
    createCanvas(700, 500); // size
    
    for(var i=0; i<100; i++) {
        circleSizes[i] = random(10, 150);
    }
}

// Loops forever
function draw() {
    background(0);
    stroke(255);
    
    for (var count = 0; count < circleSizes.length; count++) {
        var x = count * 50 + 75;
        fill(colors[count % 7]);
        ellipse(x, 240, circleSizes[count], circleSizes[count]);

        println(count);
    }
}