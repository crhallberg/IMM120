PImage[] cardImages = new PImage[52];
Card[] deck = new Card[0];
float gravity = .98;
float bounce = -.85;

void setup() {
  size(800, 600);
  // Images are names 0.png through 51.png so... 
  // We made these images in cardSpliter
  for (int i=0; i<52; i++) {
    cardImages[i] = loadImage(i+".png");
  }
  background(0, 150, 0); // default green background
}

class Card {
  PImage image;
  float x;
  float y;
  float speedX;
  float speedY;
  int width = 71;
  int height = 96;
}

// Our card making function
Card makeCard(float x, float y) {
  // Make a new "empty" card
  Card nc = new Card();
  // Assign parameters
  nc.x = x;
  nc.y = y;
  // Assign a random image
  int number = floor(random(0, 52)); // floor = round down
  nc.image = cardImages[number];
  // We don't want the speed to be less than 2 so...
  nc.speedX = random(2, 6); // Random speed between -6 and 6
  if (random(0, 100) > 50) { // Half the time...
    nc.speedX *= -1;         // ...make it negative
  }
  nc.speedY = random(-16, 0); // random negative speed so deck pop up when made
  return nc;
}

void draw() {
  if (mousePressed) {
    deck =(Card[]) append(deck, makeCard(mouseX, mouseY));
  }
  for (int i=0; i<deck.length; i++) {
    drawCard(deck[i]);
  }
  for (int i=0; i<deck.length; i++) {
    removeCardIfOffScreen(i);
  }
}

void drawCard(Card op) {
  op.x += op.speedX;
  op.y += op.speedY;
  
  if (op.y + op.height > height) {
    op.speedY *= bounce;
    op.y = height - op.height;
  }
  
  op.speedY += gravity;
  
  image(op.image, op.x, op.y);
}

void removeCardIfOffScreen(int index) {
  Card op = deck[index];
  if (op.x > width || op.x + op.width < 0) { // check if card is off screen
    deck = removeFromArray(deck, index); // delete and save new array
  }
}

Card[] removeFromArray(Card[] array, int item) {
  // Copy everything right of our doomed item one left
  for (int i = item+1; i < array.length; i++) {
    array[i-1] = array[i];
  }
  return (Card[]) shorten(array); // remove last item
} 