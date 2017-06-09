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

		this.gravity = 10;
	}

	setup() {
		createCanvas(windowWidth, windowHeight);

		this.player = new Player(windowWidth / 2, windowHeight / 2);

		this.target = new Target(windowWidth / 2, 0);
	}

	draw() {
		// background
		background(Colors.GREEN);

		// target
		const {x: tx, y: ty, color: tcolor, radius: tradius} = this.target;

		fill(tcolor);
		noStroke();
		ellipse(tx, ty, tradius, tradius);

		// create player
		const {x: px, y: py, canJump: pCanJump, color: pcolor, jumpHeight: pjumpHeight, radius: pradius} = this.player;

		fill(pcolor);
		ellipse(px, py, pradius, pradius);

		if (keyIsDown(32) && pCanJump) {
			this.player.jump();
		}
		else if (py <= windowHeight - this.gravity) {
			this.gravity = this.gravity * 1.1;

			this.player.y += this.gravity;

			this.player.canJump = false;
		}
		else {
			this.gravity = 10;
		}
	}

	keyPressed() {
		if (keyCode === 32 && this.player.y >= windowHeight - 10) {
			this.player.canJump = true;
		}
	}
}
