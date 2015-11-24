var slider;

function setup() {
    createCanvas(400, 400);
    
    // minimum and maximum (and start if you want)
    slider = createSlider(0, width, 100);
    slider.position(25, 450);
    slider.style('width', width+'px');
}

function draw() {
    var sliderValue = slider.value();
    background(sliderValue);
    ellipse(sliderValue, height/2, 50, 50)
}