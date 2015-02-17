//Variables
// Load images and sounds
var bird = 1;
var dog = 2;
var fox = 3;
var cat = 4;
var hipp = 5;
var quogga = 6;
var cards;
var flipped = -1;
var click;
var firstCard;


function preload() {
  bird = loadImage("./bird.jpg");
  dog = loadImage("./dog.jpg");
  fox = loadImage("./fox.jpg");
  cat = loadImage("./cat.jpg");
  hipp = loadImage("./hipp.jpg");
  quogga = loadImage("./quogga.jpg");
  //click = loadSound('./click.mp3')

}


// Run once at the start
function setup() {
    var canvas = createCanvas(1000, 800);
    canvas.parent('sketch');
    background(100, 200, 100);

    cards = [
      new Card(150, 100, bird, 0, bird, true), //0
      new Card(350, 100, dog, 1, dog, true), //1
      new Card(550, 100, fox, 2, fox, true), //2
      new Card(750, 100, cat, 3, cat, true), //3
      new Card(150, 300, hipp, 4, hipp, true), //4
      new Card(350, 300, quogga, 5, quogga, true), //5
      new Card(550, 300, bird, 0, bird, true), //6
      new Card(750, 300, dog, 1, dog, true), //7
      new Card(150, 500, fox, 2, fox, true), //8
      new Card(350, 500, cat, 3, cat, true), //9
      new Card(550, 500, hipp, 4, hipp, true), //10
      new Card(750, 500, quogga, 5, quogga, true) //11
    ];
  }
  // Run forever after setup

function draw() {
  fill(255, 0, 0);
  for (var i = 0; i < cards.length; i++) {
    cards[i].draw();
  }
  if (firstCard != null) {
    firstCard.showFace();
  }
}


function mouseClicked() {
  if (flipped) {
    // click.play();
  }

  for (var i = 0; i < cards.length; i++) {

    if (cards[i].isMouseInside()) {

      if (firstCard != null) {

        flipped = true;

        if (firstCard.id == cards[i].id) {

          firstCard.isOpen = true;
          cards[i].isOpen = true;
          firstCard = null;
        } else {

          firstCard.isOpen = false;
          cards[i].isOpen = false;
          firstCard = null;
        }
      } else {

        flipped = true;
        firstCard = cards[i];
      }
    }
  }

  console.log(firstCard);
}



function Card(x, y, img, id, isOpen) {
  this.x = x;
  this.y = y;
  this.img = img;
  this.id = id;
  this.isOpen = true;
  this.w = 100;
  this.h = 150;

}
Card.prototype.draw = function() {
  if (Card.prototype.isOpen) {
    Card.prototype.showFace();
  } else {
    rect(this.x, this.y, this.w, this.h, this.img, this.id, this.flipped);
  }

}
Card.prototype.showFace = function() {
  image(this.img, this.x, this.y, this.w, this.h, this.id, this.flipped);


}
Card.prototype.isMouseInside = function() {
  return mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h;
}