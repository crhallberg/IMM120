var matthew = function(sketch) {

// Variables

// Runs first, before setup
sketch.preload = function() { with(sketch) {
  // Great place to load images
}
}

// Runs once at start of code
sketch.setup = function() { with(sketch) {
  // Set size
    var canvasWidth = 400;
    var canvasHeight = 400;
    var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('matthew');
}
}

sketch.drawBaseClock = function() { with(sketch) {
    var clockHeight = 200;
    var clockWidth = 200;

    //Clock Rectangle
    background(238,232,170);
    fill(139,69,19);
    rect(100, 100, 200, 400);

    //Clock Circle
    fill(255, 255, 255);
    strokeWeight(2);
    ellipse(width / 2, height / 2, clockWidth, clockHeight);

    //Clock Text
    fill(0, 0, 0);
    noStroke(0);
    textSize(24);
    text("12", 185, 125);
    text("1", 235, 140);
    text("2", 265, 165);
    text("3", 280, 210);
    text("4", 265, 250);
    text("5", 235, 280);
    text("6", 195, 295);
    text("7", 155, 280);
    text("8", 125, 250);
    text("9", 105, 210);
    text("10", 120, 165);
    text("11", 150, 140);
}
}

sketch.draw = function() { with(sketch) {
    //Forever loop

    drawBaseClock();

    //Get Current Time
    var currDate = new Date();
    var currTime = currDate.getHours() + ':' + currDate.getMinutes() + ':' + currDate.getSeconds();
    text(currTime, 150, 50);

    drawSecondHand(currDate.getSeconds());
    drawMinuteHand(currDate.getMinutes());
    drawHourHand(currDate.getHours());
}
}

sketch.drawSecondHand = function(second) { with(sketch) {
    var secondLineLength = 75;
    var secondX, secondY;
    stroke(255, 0, 0);
    secondX = 200;
    secondY = 200;

    line(200, 200, (secondX + secondLineLength * cos(radians(clock60ToDeg(second)))), (secondY + secondLineLength * sin(radians(clock60ToDeg(second)))));
}
}

sketch.drawMinuteHand = function(minute) { with(sketch) {
    var minuteLineLength = 90;
    var minuteX, minuteY;
    stroke(0, 0, 0);
    minuteX = 200;
    minuteY = 200;

    line(200, 200, (minuteX + minuteLineLength * cos(radians(clock60ToDeg(minute)))), (minuteY + minuteLineLength * sin(radians(clock60ToDeg(minute)))));
}
}

sketch.drawHourHand = function(hour) { with(sketch) {
    var hourLineLength = 50;
    var hourX, hourY;
    stroke(0, 0, 0);
    strokeWeight(3);
    hourX = 200;
    hourY = 200;

    line(200, 200, (hourX + hourLineLength * cos(radians(clock12ToDeg(hour)))), (hourY + hourLineLength * sin(radians(clock12ToDeg(hour)))));
}
}
//Math

sketch.clock60ToDeg = function(second) { with(sketch) {
  if (second >= 60) { second = second-60; }
  degVal = 90 - (6 * second);
  return -degVal;
}
}

sketch.clock12ToDeg = function(hour) { with(sketch) {
  if (hour >= 12) { hour = hour - 12; }
  degVal = 90 - (30 * hour);
  return -degVal;
}
}

};

new p5(matthew);