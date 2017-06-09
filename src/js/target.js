import Particle from './particle';
import * as Colors from './colors';

export default class Target extends Particle {
	constructor(x, y) {
		super(x,y);

		this.color = Colors.RED;
		this.radius = 50;
	}
}