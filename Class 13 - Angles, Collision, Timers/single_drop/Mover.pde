float moverGravity = 0;
float moverFriction = 1;
class Mover {
  float x, y;
  float speedX = 0;
  float speedY = 0;
}
void updateMover(Mover op) {
  op.x += op.speedX;
  op.y += op.speedY;
  op.speedX *= moverFriction;
  op.speedY *= moverFriction;
  op.speedY += moverGravity;
}