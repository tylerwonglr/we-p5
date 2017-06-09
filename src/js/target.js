import * as Colors from './colors';

export default class Target {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.color = Colors.RED;
		this.radius = 50;
	}
}