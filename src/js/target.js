import Particle from './particle';
import * as Colors from './colors';

export default class Target extends Particle {
	constructor(x, y) {
		super(x,y);

		this.color = Colors.GRAY;
		this.height = 100;
		this.width = 200;
		this.borderRadius = 5;
	}
}