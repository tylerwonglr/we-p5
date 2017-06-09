import * as colors from './colors';

export default class Player {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.color = colors.ORANGE;
		this.jumpHeight = 100;
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