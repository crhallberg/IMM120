// Variables
var fallDistance = 100;
var hourImage;
var hoursGap = 122;
var hoursTY, hoursY;
var hoursX = 0;
var hourWidth = 120;
var prevSecond;
var seconds = [];
// Runs first, before setup
function preload() {
  // Great place to load images
  hourImage = loadImage('./hour.png');
}

// Runs once at start of code
function setup() {
  // Set size
  var canvas = createCanvas(1464, 500);
  canvas.parent('sketch');
  prevSecond = second();
  var y = fallDistance+hoursGap-minute()*2-4;
  if(minute() > 0) {
    for(var i=0;i<=60;i++) {
      var s = new Second(i, minute()-1);
      s.y = y+2;
      s.falling = false;
      seconds.push(s);
    }
  }
  for(var i=0;i<=prevSecond;i++) {
    var s = new Second(i, minute());
    s.y = y;
    s.falling = false;
    seconds.push(s);
  }
  fill(255);

  hoursTY = hour() >= 12
    ? fallDistance+hoursGap
    : fallDistance;
  hoursY = hoursTY;

  strokeCap(SQUARE);
}

function draw() {
  // Forever loop
  background(0);

  if(second() != prevSecond) {
    prevSecond = second();
    seconds.push(new Second(prevSecond, minute()));
  }
  drawHours();
  for(var i=0;i<seconds.length;i++) {
    seconds[i].draw();
  }

  var time = hour()%12 == 0
    ? '12:'
    : hour()%12 + ':';
  time += minute() < 10
    ? '0' + minute() + ':'
    : minute() + ':';
  time += second() < 10
    ? '0' + second() + ':'
    : second();
  time += hour() > 11
    ? ' PM'
    : ' AM';
  var title = getElement('title');
  title.html(time);
}

function Second(n, m)
{
  this.n = n;
  this.m = m;
  this.falling = true;

  this.x = n%60*2;
  this.y = 0;
  this.end = (60-minute())*2+fallDistance-2;
}
Second.prototype.draw = function() {
  stroke(255);
  point(this.x, this.y);
  if(this.y < this.end) {
    this.y++;
  } else if(this.falling) {
    this.falling = false;
    if(this.n == 59) {
      if(this.m == 59) {
        for(var i=0;i<seconds.length;i++) {
          if(seconds[i].falling) {
            console.log('slice', i);
            seconds = seconds.slice(i);
            break;
          }
        }
      } else {
        console.log('slice', seconds.length-60);
        seconds = seconds.slice(seconds.length-60);
        hoursX = -hoursGap;
      }
      console.log(seconds.length);

      if(hour() == 12) {
        hoursTY = fallDistance+hoursGap;
      } else if(hour() == 0) {
        hoursTY = 0;
      }
    }
  }
}

function drawHours() {
  // Part of an hour
  var moff = (minute()-2)*2+1;
  if(moff > 0) {
    image(hourImage.get(0, 0, hourWidth, moff), 0, fallDistance+hourWidth-moff-1);
  }
  for(var i=1;i<=hour()%12;i++) {
    image(hourImage, hoursGap*i+hoursX, fallDistance);
  }
  if(hour() >= 12) {
    for(var i=0;i<=12;i++) {
      image(hourImage, hoursGap*i, hoursY);
    }
    if(hoursY == fallDistance) {
      stroke(0);
      line(0, hoursY, hourWidth, hoursY);
      stroke(255);
    }
  }
  push();
  translate(-.5, +.5);
  stroke(255, 150);
  for(var i=0;i<12;i++) {
    line(hoursGap*i, hoursY+hoursGap, hoursGap*i+hourWidth, hoursY+hoursGap);
  }
  pop();
  if(hoursX < 0) {
    hoursX += 2;
  }
  if(hoursY < hoursTY) {
    hoursY += 2;
  }
}

/*
var thour = 11;
var tminute = 58;
var trm = 0;
function hour() {
  return tminute > 0 ? thour : thour+1;
}
function minute() {
  if(trm != minute()) {
    tminute = (tminute+1) % 60;
    trm = minute();
  }
  return tminute;
}*/