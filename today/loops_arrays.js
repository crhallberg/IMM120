





// Variables
var letters = ["L", "o", "o", "p", "i", "n", "g"];
//               0,   1,   2,   3,   4

// Runs first and once
function setup() {
    createCanvas(600, 400); // size
    noStroke();
    textSize(48);
    println(letters);
}

// Loops forever
function draw() {
    background(255);
    
    text(letters[3], 100, 100);

    for (var num=1; num<=10; num=num+1) {
        text(num, num*50, height/2);
    }
}