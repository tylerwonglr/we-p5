import '../css/styles.scss';
import Render from './render';
import Score from './score';

const render = new Render();

const score = new Score();

function main(window) {
	window.setup = render.setup;
	window.draw = render.draw;
	window.keyPressed = render.keyPressed;
	window.setReady = score.setReady;
}

main(window);
