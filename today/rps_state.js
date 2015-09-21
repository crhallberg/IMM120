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
    println(player1 + " vs " + player2);
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
        text('ROCK', padding, 150);
    }
    if (key === 'S') {
        if (player1 === false) {
            player1 = 'paper';
        }
        text('PAPER', padding, 200);
    }
    if (key === 'D') {
        if (player1 === false) {
            player1 = 'scissors';
        }
        text('SCISSORS', padding, 250);
    }
    // RIGHT SIDE
    textAlign(RIGHT);
    var padding = 10;
    if (key === 'J') {
        if (player2 === false) {
            player2 = 'rock';
        }
        text('ROCK', width - padding, 150);
    }
    if (key === 'K') {
        if (player2 === false) {
            player2 = 'paper';
        }
        text('PAPER', width - padding, 200);
    }
    if (key === 'L') {
        if (player2 === false) {
            player2 = 'scissors';
        }
        text('SCISSORS', width - padding, 250);
    }
}