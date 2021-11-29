function setup() {
	createCanvas(windowWidth, windowHeight);
	// put setup code here
	angleMode(DEGREES);
}

function draw() {
	// put drawing code here
	background(0);
	
	let x_cl = 400;
	let y_cl = x_cl;
	let rotateang = -90;
	let radius = 300;
	let dif_between = 20;
	let d = radius*2;
	let hr = hour();
	let mn = minute();
	let sc = second();

	// strokeWeight(4);
	// stroke(255);
	// noFill();
	// ellipse(200, 200, 400, 400);

	strokeWeight(4);
	noFill();
	stroke(255, 100, 200);
	let scang = map(sc, 0, 60, 0, 360);
	arc(x_cl, y_cl, d, d, 0+rotateang, scang+rotateang);


	strokeWeight(4);
	noFill();
	stroke(255, 150, 150);
	let mnang = map(mn, 0, 60, 0, 360);
	arc(x_cl, y_cl, d-dif_between, d-dif_between, 0+rotateang, mnang+rotateang);

	strokeWeight(4);
	noFill();
	stroke(170, 250, 150);
	let hrang = map(hr%12, 0, 12, 0, 360);
	arc(x_cl, y_cl, d-dif_between*2, d-dif_between*2, 0+rotateang, hrang+rotateang);

	
}
