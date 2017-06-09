import p5 from 'p5';
import Player from './player';

export default class Render {
	constructor() {
		this.draw = this.draw.bind(this);
		this.setup = this.setup.bind(this);
		this.keyPressed = this.keyPressed.bind(this);

		this.screen = {};
	}

	setup() {
		createCanvas(windowWidth, windowHeight);

		this.player = new Player(windowWidth / 2, windowHeight);
	}

	draw() {
		const {x, y, color, jumpHeight} = this.player;

		background('#DDD');

		fill(color);
		ellipse(x, y, 50, 50);
	}

	keyPressed() {
		if (keyCode === 32) {
			this.player.jump();
		}
	}
}
