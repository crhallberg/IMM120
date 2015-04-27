// See if a circle is touching a rectangle
boolean isCircleTouchingRect(
/* circle */float cx, float cy, float cs /* size, same as ellipse */, 
/* rect   */float rx, float ry, float rw, float rh
) {
  float x = rx;
  if (cx > rx) {
    x = min(cx, rx+rw);
  }
  float y = ry;
  if (cy > ry) {
    y = min(cy, ry+rh);
  }
  return isPointInsideCircle(x, y, cx, cy, cs);
}

// See if a rectangle is touching a rectangle
boolean isRectTouchingRect(
/* rectangle 1 */float r1x, float r1y, float r1w, float r1h, 
/* rectangle 2 */float r2x, float r2y, float r2w, float r2h
) {
  // 0 - x, 1 - y, 2 - w, 3 - h
  return !(r1x > r2x+r2w // left > right
  || r1y > r2y+r2h // top > bottom
  || r1x+r1w < r2x // right < left
  || r1y+r1h < r2y); // bottom < top
}

// Are two circles touching? */
boolean isCircleTouchingCircle(
/* circle 1 */float c1x, float c1y, float c1s /* size */, 
/* circle 1 */float c2x, float c2y, float c2s /* size */
) {
  return (c1s+c2s)/2 >= dist(c1x, c1y, c2x, c2y);
}

