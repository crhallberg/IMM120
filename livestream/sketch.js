// Variables
var socket = window.io.connect('http://romeo.crhallberg.com:8120');
var room = 'skyblue';

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(room);

}
