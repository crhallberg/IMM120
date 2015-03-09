boolean colliding(int[] rect1, int[] rect2) {
  // 0 - x, 1 - y, 2 - w, 3 - h
  return !(rect1[0] > rect2[0]+rect2[2] // left > right
  && rect1[1] > rect2[1]+rect2[3] // top > bottom
  && rect1[0]+rect1[2] < rect2[0] // right < left
  && rect1[1]+rect1[3] < rect2[1]); // bottom < top
}
