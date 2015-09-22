// Variables
var player1 = false;
var player2 = false;

var rock; // declaring

// Runs first and once
function setup() {
    createCanvas(800, 400); // size
    background(255);
    fill(0);
    textSize(45);

    rock = loadImage('rock.png');
}

// Loops forever
var spin = 0;

function draw() {
    background(255);
    textAlign(LEFT);
    // Players entering moves
    if (player1 === false || player2 === false) {
        if (player1 === false) {
            text("A/S/D", 10, 200);
        } else {
            text("READY!", 10, 200);
        }
        textAlign(RIGHT);
        if (player2 === false) {
            text("J/K/L", width - 10, 200);
        } else {
            text("READY!", width - 10, 200);
        }
    } else if ( // PLAYER 1 WINS
        (player1 == 'paper' && player2 == 'rock') ||
        (player1 == 'rock' && player2 == 'scissors') ||
        (player1 == 'scissors' && player2 == 'paper')
    ) {
        textAlign(CENTER);
        text("P1 WINS!!", width/2, 200);
        text(player1 + " vs " + player2, width/2, 300);
    } else if ( // PLAYER 2 WINS
        (player2 == 'paper' && player1 == 'rock') ||
        (player2 == 'rock' && player1 == 'scissors') ||
        (player2 == 'scissors' && player1 == 'paper')
    ) {
        textAlign(CENTER);
        text("P2 WINS!!", width/2, 200);
        text(player1 + " vs " + player2, width/2, 300);
    } else { // TIE
        textAlign(CENTER);
        text("TIE", width/2, 200);
        text(player1 + " vs " + player2, width/2, 300);
    }
}

function keyPressed() {
    // RESET
    if (key === ' ') {
        player1 = false;
        player2 = false;
        background(255);
    }
    // LEFT SIDE
    textAlign(LEFT);
    var padding = 10;
    if (key === 'A') {
        if (player1 === false) {
            player1 = 'rock';
        }
    }
    if (key === 'S') {
        if (player1 === false) {
            player1 = 'paper';
        }
    }
    if (key === 'D') {
        if (player1 === false) {
            player1 = 'scissors';
        }
    }
    // RIGHT SIDE
    textAlign(RIGHT);
    var padding = 10;
    if (key === 'J') {
        if (player2 === false) {
            player2 = 'rock';
        }
    }
    if (key === 'K') {
        if (player2 === false) {
            player2 = 'paper';
        }
    }
    if (key === 'L') {
        if (player2 === false) {
            player2 = 'scissors';
        }
    }
}