function setup() {
    var canvas = createCanvas(300, 300);
    canvas.parent('#sketch');
    
    var third = select('#third');
    third.html('THIS CHANGES <u>EVERYTHING</u>!!');
    third.style('background', 'palegreen');
    third.style('padding', '16px');
    
    var boldElements = selectAll('b');
    for (var i=0; i<boldElements.length; i++) {
        boldElements[i].html('<img src="http://cliparts.co/cliparts/6iy/XxE/6iyXxERAT.jpg"/>')
    }
    
    var link = createA('#', 'CLICK ME FOR FUN');
    select('#sketch').child(link);
}

function draw() {
    background('purple');
}