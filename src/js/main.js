import draw from './draw';

const drawing = new draw();

// var draw = require('./draw');

// function setup() {
// 	createCanvas(windowWidth, windowHeight);
// }

function main(window) {
	window.setup = drawing.setup;
	window.draw = drawing.draw;
}

main(window);

// function draw() {
// 	background(0);
	
// 	console.log('pew')
// }
