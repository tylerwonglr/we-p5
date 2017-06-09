import p5 from 'p5';

import Particle from './particle';
import * as Colors from './colors';

export default class Player extends Particle {
	constructor(x, y) {
		super(x,y);

		this.color = Colors.ORANGE;
		this.jumpHeight = 100;
		this.radius = 50;

		this.velocity = createVector(0, -10);
	}

	jump() {
		if (this.y >= this.jumpHeight) {
			console.log(this.velocity);

			this.y += this.velocity.y * 0.5;
		}

		// if (this.y <= target.y + target.radius) {
		// 	counter++;
		// 	this.y = windowHeight;
		//
		// 	alert(counter);
		// }
	}
}