import Particle from './particle';
import * as Colors from './colors';

export default class Player extends Particle {
	constructor(x, y) {
		super(x,y);

		this.color = Colors.ORANGE;
		this.jumpHeight = 100;
		this.radius = 50;
	}

	jump() {
		if (this.y >= this.jumpHeight) {
			this.y -= this.jumpHeight;
		}

		// if (this.y <= target.y + target.radius) {
		// 	counter++;
		// 	this.y = windowHeight;
		//
		// 	alert(counter);
		// }
	}
}