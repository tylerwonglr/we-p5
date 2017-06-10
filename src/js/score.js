// import socketio from 'io';
import {bindAll} from 'lodash';
const socketio = require('socket.io-client');

class Score {
	constructor() {
		bindAll(
			this,
			'createElement',
			'setReady'
		);

		this.socket = socketio("http://172.16.22.156:3000");

		this.socket.on(
			'connect',
			() => {
				console.log('attempingconnection')
				this.socket.emit('user joined', function(user){
					console.log(user)
				})
			}
		);
	}

	setReady() {
		document.getElementById('readyButton').innerHTML = 'waiting for opponent...';
		const name = document.getElementById('userName').value;
				
				let data = {
					socketId: this.socket.id,
					name,
					ready: true
				}

				this.socket.emit(
					'add user',
					data, resp => {
						console.log(resp);
					}
				);
	}

	createElement() {
		const button = document.createElement("BUTTON");
		const text = document.createTextNode("Ready?");

		button.appendChild(text);

		document.body.appendChild(button);
	}
}

export default Score;
