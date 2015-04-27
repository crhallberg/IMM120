/**
 * Create a new timer with Timer t = new Timer(numberOfSeconds);
 *
 * - start       : start/unpause the timer
 * - stop/pause  : pause the timer
 * - reset       : reset the timer back to the initial time
 * - toggle      : if paused, start. If running, pause.
 * - getTimeLeft : get the number of seconds left (float/decimal)
 */
class Timer
{
  float endTime;
  float timeLeft;
  float duration;
  boolean running = false;

  Timer(float d) {
    this.duration = d * 1000;
    this.timeLeft = this.duration; 
    this.start();
  }

  void start() {
    endTime = millis() + timeLeft;
    running = true;
  }

  void pause() {
    running = false;
  }
  void stop() {
    this.pause();
  }

  void toggle() {
    if (this.running) {
      this.pause();
    } else {
      this.start();
    }
  }

  void reset() {
    this.timeLeft = this.duration; 
    if (this.running) {
      this.start();
    }
  }

  float getTimeLeft() {
    if (running) {
      this.timeLeft = this.endTime - millis();
    }
    if (timeLeft <= 0) {
      return 0;
    } else {
      return this.timeLeft / 1000f;
    }
  }
}

