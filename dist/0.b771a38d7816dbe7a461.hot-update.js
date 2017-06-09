webpackHotUpdate(0,{

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import {io} from 'socket.io';


var _lodash = __webpack_require__(11);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Score = function () {
	function Score() {
		_classCallCheck(this, Score);

		(0, _lodash.bindAll)(this, 'createElement', 'setReady');

		this.socket = socket.io("http://172.16.22.156:3000");
	}

	_createClass(Score, [{
		key: 'setReady',
		value: function setReady() {
			document.getElementById('readyButton').innerHTML = 'waiting for opponent...';
			var name = document.getElementById('userName').value;

			this.socket.on('connect', function () {
				var data = {
					socketId: socket.id,
					name: name,
					ready: true
				};

				socket.emit('add user', data, function (resp) {
					console.log(resp);
				});
			});
		}
	}, {
		key: 'createElement',
		value: function createElement() {
			var button = document.createElement("BUTTON");
			var text = document.createTextNode("Ready?");

			button.appendChild(text);

			document.body.appendChild(button);
		}
	}]);

	return Score;
}();

exports.default = Score;

/***/ })

})