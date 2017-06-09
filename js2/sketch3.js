function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(50);

	// fill(random(255), 0, random(255));
	// ellipse(25, 25, 50, 50);

	if(keyIsDown(UP_ARROW)) {
		strokeWeight(4);
		stroke(255);

		for (var x = 0; x < width; x += 50) {
			for (var y = 0; y <= height; y += 50) {
				fill(random(255), 0, random(255));
				ellipse(x, y, 25, 25);
			}
		}
	}

	if(keyIsDown(LEFT_ARROW)) {
		strokeWeight(4);
		stroke(255);

		for (var x = 0; x < width; x += 50) {
			fill(random(255), 0, random(255));
			ellipse(x, 200, 25, 25);
		}

		// for (var y = 0; y <= height; y += 50) {
			// fill(random(255), 0, random(255));
			// ellipse(100, y, 25, 25);
		// }
	}

	if(keyIsDown(RIGHT_ARROW)) {

		strokeWeight(4);
		stroke(255);

		for (var x = 0; x < width; x += 50) {
			fill(random(255), 0, random(255));
			ellipse(x, 200, 25, 25);
		}

		for (var y = 0; y <= height; y += 50) {
			fill(random(255), 0, random(255));
			ellipse(400, y, 25, 25);
		}
	}

	if(keyIsDown(DOWN_ARROW)) {

		strokeWeight(4);
		stroke(255);

		// for (var x = 0; x < width; x += 50) {
			fill(random(255), 0, random(255));
			ellipse(300, 200, 25, 25);
		// }

		// for (var y = 0; y <= height; y += 50) {
			// fill(random(255), 0, random(255));
			// ellipse(200, y, 25, 25);
		// }
	}
}

