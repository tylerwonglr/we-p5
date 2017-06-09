import * as Colors from './colors';

export default class Player {
	constructor(x, y) {
		this.x = x;
		this.y = y;
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