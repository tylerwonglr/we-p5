import Particle from './particle';
import * as Colors from './colors';

export default class Player extends Particle {
	constructor(x, y) {
		super(x,y);

		this.color = Colors.ORANGE;
		this.jumpHeight = 50;
		this.radius = 50;
		this.canJump = true;
		this.counter = 0;
	}

	jump() {
		if (this.y >= this.jumpHeight + 75) {
			this.y -= this.jumpHeight;

			if (this.y <= 125) {
				this.counter++;
				console.log(this.counter);

				strokeWeight(4);
				stroke(255);

				// for (var x = 0; x < width; x += 50) {
					fill(random(255), 0, random(255));
					ellipse(this.x - 150, this.y, 25, 25);
					ellipse(this.x + 150, this.y, 25, 25);
				// }

				// for (var y = 0; y <= height; y += 50) {
					// fill(random(255), 0, random(255));
					// ellipse(200, y, 25, 25);
				// }
			}
		}

		// if (this.y <= target.y + target.radius) {
		// 	counter++;
		// 	this.y = windowHeight;
		//
		// 	alert(counter);
		// }
	}
}