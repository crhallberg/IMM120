var rebecca = function(sketch) {

// Variables
var period, gettime, hour, min, sec, mtime, time;

// Runs first, before setup
sketch.preload = function() { with(sketch) {
  // Great place to load images
}
}

// Runs once at start of code
sketch.setup = function()
{ with(sketch) {
  // Set size
  var canvas = createCanvas(300, 300);
  canvas.parent('rebecca');
}
}

//Adds a zero before time if less than 10
sketch.addZero = function(i)
{ with(sketch) {
    if (i < 10)
    {
        i = "0" + i;
    }
    return i;
}
}

//Converts 24 hour into 12 hour
sketch.formatHour = function(h)
{ with(sketch) {
    var hour = h % 12;

    if (hour == 0)
    {
        hour = 12;
    }
    return String(hour)
}
}

//Gets time period (AM or PM)
sketch.getTimePeriod = function(h) { with(sketch) {
    if (h < 12)
    	period= "AM";
    else
    	period = "PM";
    return String(period);
}
}

sketch.draw = function()
{ with(sketch) {
  // Forever loop
  clear();
  background(160);
  gettime = new Date();
  hour = addZero(gettime.getHours());
  min = addZero(gettime.getMinutes());
  sec = addZero(gettime.getSeconds());
  mtime = hour + ":" + min + ":" + sec;
  time = addZero(formatHour(hour)) + ":" + min + ":" + sec +" " + getTimePeriod(hour);
  fill(20,0,0,0);
  textSize(30);
  text("The Current time is:", 10, 30);
  fill(255, 255, 255, 255);
  rect(40, 55, 220, 100);
  rect(5, 165, 290, 100);
  fill(0,0,0,0);
  text("Military Time:", 50, 85);
  text("Standard Time:", 10, 200);
  textSize(50);
  text(mtime, 50, 140);
  text(time, 10, 250);
}
}

};

new p5(rebecca);