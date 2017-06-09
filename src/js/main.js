import draw from './draw';

const drawing = new draw();

function main(window) {
	window.setup = drawing.setup;
	window.draw = drawing.draw;
}

main(window);
