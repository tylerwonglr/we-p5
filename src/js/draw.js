import p5 from 'p5';

export default class draw {
	setup() {
		createCanvas(500, 500);

		noFill();

		stroke(0);
	}

	draw() {
		background(145);

		ellipse(mouseX, mouseY, 100, 100);
	}
}
