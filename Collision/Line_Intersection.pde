// Returns a point for a line intersection, or null if lines do not intersect

PVector lineIntersection(
/* line 1 */float x1, float y1, float x2, float y2, 
/* line 2 */float x3, float y3, float x4, float y4
) {  
  float bx = x2 - x1;
  float by = y2 - y1;
  float dx = x4 - x3;
  float dy = y4 - y3;

  float b_dot_d_perp = bx * dy - by * dx;

  if (b_dot_d_perp == 0) return null;

  float cx = x3 - x1;
  float cy = y3 - y1;

  float t = (cx * dy - cy * dx) / b_dot_d_perp;
  if (t < 0 || t > 1) return null;

  float u = (cx * by - cy * bx) / b_dot_d_perp;
  if (u < 0 || u > 1) return null;

  return new PVector(x1+t*bx, y1+t*by);
}
