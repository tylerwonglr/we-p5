import p5 from 'p5';
import Player from './player';
import * as Colors from './colors';

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
		// background
		background(Colors.BLUE);

		// create player
		const {x: px, y: py, color: pcolor, jumpHeight: pjumpHeight, radius: pradius} = this.player;

		fill(pcolor);
		ellipse(px, py, pradius, pradius);

		// etc.
	}

	keyPressed() {
		if (keyCode === 32) {
			this.player.jump();
		}
	}
}
