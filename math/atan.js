var atan = function(sketch) {
	sketch.setup = function() {
		with(sketch) {
			createCanvas(200, 200).parent("atan");
			noStroke();
		}
	}

	sketch.draw = function() {
		with(sketch) {
			// Clear
			background(50);

			// CALCULATE ANGLE FROM CENTER TO MOUSE
			var angle = atan2(mouseY-height/2, mouseX-width/2);

			// Eye
			fill(255);
			ellipse(width/2, height/2, 100, 100);
			fill(0, 0, 150);
			ellipse(width/2+cos(angle)*25, height/2+sin(angle)*25, 50, 50);
		}
	}
}
new p5(atan);