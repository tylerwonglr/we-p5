import p5 from 'p5';
import Player from './player';
import Target from './target';
import * as Colors from './colors';

export default class Render {
	constructor() {
		this.draw = this.draw.bind(this);
		this.setup = this.setup.bind(this);
		this.keyPressed = this.keyPressed.bind(this);

		this.screen = {};

		this.gravity = 5;
	}

	setup() {
		createCanvas(windowWidth, windowHeight);

		this.player = new Player(windowWidth / 2, windowHeight);

		this.target = new Target(windowWidth / 2, 0);
	}

	draw() {
		// background
		background(Colors.BLUE);

		// target
		const {x: tx, y: ty, color: tcolor, radius: tradius} = this.target;

		fill(tcolor);
		noStroke();
		ellipse(tx, ty, tradius, tradius);

		// create player
		const {x: px, y: py, color: pcolor, jumpHeight: pjumpHeight, radius: pradius} = this.player;

		fill(pcolor);
		ellipse(px, py, pradius, pradius);

		// gravity
		if (py <= windowHeight - this.gravity) {
			this.player.y += this.gravity;
		}

		// etc.
	}

	keyPressed() {
		if (keyCode === 32) {
			this.player.jump();
		}
	}
}
