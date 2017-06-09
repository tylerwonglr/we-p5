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
		background(Colors.BLUE);

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

		this.secret();
	}

	keyPressed() {
		if (keyCode === 32 && this.player.y >= windowHeight - 10) {
			this.player.canJump = true;
		}
	}

	secret() {
		if(keyIsDown(UP_ARROW)) {
			strokeWeight(4);
			stroke(255);

			for (var x = 0; x < width; x += 50) {
				for (var y = 0; y <= height; y += 50) {
					fill(random(255), 0, random(255));
					ellipse(x, y, 25, 25);
				}
			}
		}

		if(keyIsDown(LEFT_ARROW)) {
			strokeWeight(4);
			stroke(255);

			for (var x = 0; x < width; x += 50) {
				fill(random(255), 0, random(255));
				ellipse(x, 200, 25, 25);
			}

			// for (var y = 0; y <= height; y += 50) {
				// fill(random(255), 0, random(255));
				// ellipse(100, y, 25, 25);
			// }
		}

		if(keyIsDown(RIGHT_ARROW)) {

			strokeWeight(4);
			stroke(255);

			for (var x = 0; x < width; x += 50) {
				fill(random(255), 0, random(255));
				ellipse(x, 200, 25, 25);
			}

			for (var y = 0; y <= height; y += 50) {
				fill(random(255), 0, random(255));
				ellipse(400, y, 25, 25);
			}
		}

		if(keyIsDown(DOWN_ARROW)) {

			strokeWeight(4);
			stroke(255);

			// for (var x = 0; x < width; x += 50) {
				fill(random(255), 0, random(255));
				ellipse(300, 200, 25, 25);
			// }

			// for (var y = 0; y <= height; y += 50) {
				// fill(random(255), 0, random(255));
				// ellipse(200, y, 25, 25);
			// }
		}
	}
}
