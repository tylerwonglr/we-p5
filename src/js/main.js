import Render from './render';

const render = new Render();

function main(window) {
	window.setup = render.setup;
	window.draw = render.draw;
	window.keyPressed = render.keyPressed;
}

main(window);
