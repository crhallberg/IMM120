// I found an image that had every card on it, evenly spaced.
// This is called a "sprite sheet".
PImage sprite = loadImage("sprite.png");
int count = 0;
int cardWidth = 71; // 1 offset, 2 between
int cardHeight = 96; // 1 offset, 2 between
for (int x=1; x<sprite.width; x+=cardWidth + 2) { // + 2 for two between
  for (int y=1; y<sprite.height; y+=cardHeight + 2) {
    PImage card = sprite.get(x, y, cardWidth, cardHeight);
    card.save("cards/"+count+".png"); // saves PImage to the passed file name
    count++;
  }
}
exit(); // Closes window when done

// In this case, the cards have a thick right border.
// I didn't want that, so I made the cardWidth 1 less and pretended their were
//     two pixels between every card. Otherwise, the first for loop would be:
// cardWidth = 72;
// for (int x=1; x<sprite.width; x+=cardWidth + 1) {