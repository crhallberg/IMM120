var kristina = function(sketch) {

// Variables

// Runs first, before setup
sketch.preload = function() { with(sketch) {
  // Great place to load images
}
}

// Runs once at start of code
sketch.setup = function() { with(sketch) {
  // Set size
  var canvas = createCanvas(500, 500);
  canvas.parent('kristina');
  angleMode(DEGREES);
  var s= second
  var m= minute
  var h= hour



}
}

sketch.draw = function()
	{ with(sketch) {

        s=second
        m=minute
        h=hour



	strokeWeight(3);
	fill(150,140,250);
    ellipse(250,250,400,400);

    fill(100,90,150);
    ellipse(250,250,200,200);



    line(250,50,250,100);
    //12
    line(50,250,100,250);
    //9
    line(450,250,400,250);
    //3
    line(250,400,250,450);
    //6



    textSize(32);
    fill(225);
    text("12",233,115);
    //12

    textSize(32);
    fill(225);
    text("6",240,400);
    //6

    textSize(32);
    fill(225);
    text("9",108,255);
    //9

    textSize(32);
    fill(225);
    text("3",375,255);
    //3


    textSize(32);
    fill(225);
    text("1",300,140);
    //1

    textSize(32);
    fill(225);
    text("2",345,190);
    //2

    textSize(32);
    fill(225);
    text("4",345,320);
    //4

    textSize(32);
    fill(225);
    text("5",300,375);
    //5

    textSize(32);
    fill(225);
    text("7",175,375);
    //7

    textSize(32);
    fill(225);
    text("8",125,320);
    //8

    textSize(32);
    fill(225);
    text("10",125,190);
    //10

    textSize(32);
    fill(225);
    text("11",165,140);
    //11

    push();
    translate(250,250);
    rotate((second()/60) * 360);
    line(0,0,0,-130);
    pop();

    push();
    translate(250,250);
    rotate((minute()/60) * 360);
    line(0,0,0,-100);
    pop();

    push();
    translate(250,250);
    rotate((hour()/12)*360);
    line(0,0,0,-40)
    pop();

    noStroke();
    fill(0,175,175);
    ellipse(125,125,25,25);


    fill(175,0,175);
    ellipse(420,300,45,45);

    fill(210,0,175);
    ellipse(100,175,40,40);

   noStroke();
    fill(75,19,245);
    ellipse(220,375,20,20);


    fill(175,73,210);
    ellipse(160,375,30,30);


    fill(275,119,245);
    ellipse(350,100,40,40);

}
}

};

new p5(kristina);
