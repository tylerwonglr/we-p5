import {bindAll} from 'lodash';

class Score {
	constructor() {
		bindAll(
			this,
			'createElement',
			'setReady'
		);
	}

	setReady() {
		document.getElementById('readyButton').innerHTML = 'waiting for opponent...';
	}

	createElement() {
		const button = document.createElement("BUTTON");
		const text = document.createTextNode("Ready?");

		button.appendChild(text);

		document.body.appendChild(button);
	}
}

export default Score;
