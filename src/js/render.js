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
		const {playerX, playerY, playerColor, playerJumpHeight, playerRadius} = this.player;

		background(Colors.BLUE);

		fill(playerColor);
		ellipse(playerX, playerY, playerRadius, playerRadius);
	}

	keyPressed() {
		if (keyCode === 32) {
			this.player.jump();
		}
	}
}
