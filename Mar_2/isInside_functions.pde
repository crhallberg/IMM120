boolean isInsideCircle(float pointX, float pointY, float circleX, float circleY, float radius)
{
  boolean answer = dist(circleX, circleY, pointX, pointY) < radius;
  return answer;
}

boolean isInsideRect(float x, float y, float rectX, float rectY, float rectW, float rectH)
{
  boolean answer = x > rectX && y > rectY && x < rectX+rectW && y < rectY+rectH;
  return answer;
}

