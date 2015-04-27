// See if a point is inside of a circle
boolean isPointInsideCircle(
/* point  */float pointX, float pointY, 
/* circle */float circleX, float circleY, float size
) {
  boolean answer = dist(circleX, circleY, pointX, pointY) < size/2;
  return answer;
}

// See if a point is inside of a rectangle
boolean isPointInsideRect(
/* point    */float x, float y, 
/* rectangle */float rectX, float rectY, float rectW, float rectH
) {
  boolean answer = x > rectX && y > rectY && x < rectX+rectW && y < rectY+rectH;
  return answer;
}
