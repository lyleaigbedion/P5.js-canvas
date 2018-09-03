function setup() {
	// draws the canvas to the width and hieght of the browser
	createCanvas(windowWidth, windowHeight);
	
	//canvas background is black 
	background(0);
	
	//the ellipse will be white with no stroke line.
	noStroke();
	fill(255);
	//creates an ellipse at the center of the screen
	// 50,50 is the width and height of the circle making the diameter 100 pixels
	ellipse(windowWidth/2, windowHeight/2, 50,50);
	
	//rectangle has no stroke line and will be a shade of grey
	noStroke();
	fill(175);
	//rectangle takes points windowWidth/2 and 0 to be
	//placed in the top middle of the screen
	//it then takes windowWitdh/2 and WindowHiegt/2 to represent
	//the width and height of the rectangle which takes up a 1/4th of the screen 
	rect(windowWidth/2,0,windowWidth/2,windowHeight/2);

}

function draw() {
	
}