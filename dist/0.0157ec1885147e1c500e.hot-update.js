webpackHotUpdate(0,{

/***/ 0:
false,

/***/ 1:
false,

/***/ 10:
false,

/***/ 100:
false,

/***/ 101:
false,

/***/ 102:
false,

/***/ 103:
false,

/***/ 104:
false,

/***/ 105:
false,

/***/ 106:
false,

/***/ 107:
false,

/***/ 108:
false,

/***/ 109:
false,

/***/ 11:
false,

/***/ 110:
false,

/***/ 111:
false,

/***/ 112:
false,

/***/ 113:
false,

/***/ 114:
false,

/***/ 115:
false,

/***/ 116:
false,

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import {io} from 'socket.io';


var _lodash = __webpack_require__(205);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Score = function () {
	function Score() {
		_classCallCheck(this, Score);

		(0, _lodash.bindAll)(this, 'createElement', 'setReady');

		this.socket = io("172.16.22.156:3000");
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

/***/ }),

/***/ 12:
false,

/***/ 120:
false,

/***/ 121:
false,

/***/ 122:
false,

/***/ 123:
false,

/***/ 124:
false,

/***/ 125:
false,

/***/ 126:
false,

/***/ 127:
false,

/***/ 128:
false,

/***/ 129:
false,

/***/ 13:
false,

/***/ 130:
false,

/***/ 131:
false,

/***/ 135:
false,

/***/ 136:
false,

/***/ 137:
false,

/***/ 138:
false,

/***/ 139:
false,

/***/ 14:
false,

/***/ 140:
false,

/***/ 141:
false,

/***/ 142:
false,

/***/ 143:
false,

/***/ 144:
false,

/***/ 145:
false,

/***/ 146:
false,

/***/ 147:
false,

/***/ 148:
false,

/***/ 149:
false,

/***/ 15:
false,

/***/ 150:
false,

/***/ 151:
false,

/***/ 152:
false,

/***/ 153:
false,

/***/ 154:
false,

/***/ 156:
false,

/***/ 157:
false,

/***/ 158:
false,

/***/ 159:
false,

/***/ 16:
false,

/***/ 160:
false,

/***/ 161:
false,

/***/ 162:
false,

/***/ 163:
false,

/***/ 164:
false,

/***/ 165:
false,

/***/ 166:
false,

/***/ 167:
false,

/***/ 168:
false,

/***/ 169:
false,

/***/ 17:
false,

/***/ 170:
false,

/***/ 171:
false,

/***/ 172:
false,

/***/ 173:
false,

/***/ 174:
false,

/***/ 175:
false,

/***/ 176:
false,

/***/ 177:
false,

/***/ 178:
false,

/***/ 179:
false,

/***/ 18:
false,

/***/ 180:
false,

/***/ 181:
false,

/***/ 182:
false,

/***/ 183:
false,

/***/ 184:
false,

/***/ 185:
false,

/***/ 186:
false,

/***/ 187:
false,

/***/ 188:
false,

/***/ 189:
false,

/***/ 19:
false,

/***/ 190:
false,

/***/ 191:
false,

/***/ 192:
false,

/***/ 193:
false,

/***/ 194:
false,

/***/ 195:
false,

/***/ 196:
false,

/***/ 197:
false,

/***/ 198:
false,

/***/ 199:
false,

/***/ 20:
false,

/***/ 200:
false,

/***/ 201:
false,

/***/ 202:
false,

/***/ 203:
false,

/***/ 204:
false,

/***/ 206:
false,

/***/ 207:
false,

/***/ 208:
false,

/***/ 209:
false,

/***/ 21:
false,

/***/ 210:
false,

/***/ 211:
false,

/***/ 212:
false,

/***/ 213:
false,

/***/ 214:
false,

/***/ 215:
false,

/***/ 217:
false,

/***/ 218:
false,

/***/ 219:
false,

/***/ 22:
false,

/***/ 220:
false,

/***/ 221:
false,

/***/ 222:
false,

/***/ 223:
false,

/***/ 224:
false,

/***/ 225:
false,

/***/ 226:
false,

/***/ 227:
false,

/***/ 228:
false,

/***/ 229:
false,

/***/ 23:
false,

/***/ 230:
false,

/***/ 231:
false,

/***/ 232:
false,

/***/ 233:
false,

/***/ 234:
false,

/***/ 235:
false,

/***/ 236:
false,

/***/ 237:
false,

/***/ 238:
false,

/***/ 239:
false,

/***/ 24:
false,

/***/ 240:
false,

/***/ 241:
false,

/***/ 242:
false,

/***/ 243:
false,

/***/ 244:
false,

/***/ 245:
false,

/***/ 246:
false,

/***/ 247:
false,

/***/ 248:
false,

/***/ 249:
false,

/***/ 25:
false,

/***/ 250:
false,

/***/ 251:
false,

/***/ 252:
false,

/***/ 253:
false,

/***/ 254:
false,

/***/ 255:
false,

/***/ 256:
false,

/***/ 257:
false,

/***/ 258:
false,

/***/ 259:
false,

/***/ 26:
false,

/***/ 262:
false,

/***/ 263:
false,

/***/ 264:
false,

/***/ 265:
false,

/***/ 266:
false,

/***/ 267:
false,

/***/ 268:
false,

/***/ 269:
false,

/***/ 27:
false,

/***/ 270:
false,

/***/ 271:
false,

/***/ 272:
false,

/***/ 273:
false,

/***/ 274:
false,

/***/ 275:
false,

/***/ 276:
false,

/***/ 277:
false,

/***/ 28:
false,

/***/ 29:
false,

/***/ 3:
false,

/***/ 30:
false,

/***/ 31:
false,

/***/ 32:
false,

/***/ 33:
false,

/***/ 34:
false,

/***/ 35:
false,

/***/ 36:
false,

/***/ 37:
false,

/***/ 39:
false,

/***/ 4:
false,

/***/ 41:
false,

/***/ 42:
false,

/***/ 44:
false,

/***/ 45:
false,

/***/ 46:
false,

/***/ 47:
false,

/***/ 48:
false,

/***/ 49:
false,

/***/ 5:
false,

/***/ 50:
false,

/***/ 51:
false,

/***/ 52:
false,

/***/ 53:
false,

/***/ 54:
false,

/***/ 55:
false,

/***/ 56:
false,

/***/ 57:
false,

/***/ 58:
false,

/***/ 59:
false,

/***/ 6:
false,

/***/ 60:
false,

/***/ 61:
false,

/***/ 63:
false,

/***/ 64:
false,

/***/ 65:
false,

/***/ 66:
false,

/***/ 67:
false,

/***/ 68:
false,

/***/ 69:
false,

/***/ 7:
false,

/***/ 70:
false,

/***/ 71:
false,

/***/ 72:
false,

/***/ 73:
false,

/***/ 74:
false,

/***/ 75:
false,

/***/ 76:
false,

/***/ 77:
false,

/***/ 78:
false,

/***/ 79:
false,

/***/ 8:
false,

/***/ 80:
false,

/***/ 81:
false,

/***/ 82:
false,

/***/ 83:
false,

/***/ 84:
false,

/***/ 85:
false,

/***/ 86:
false,

/***/ 87:
false,

/***/ 88:
false,

/***/ 89:
false,

/***/ 9:
false,

/***/ 90:
false,

/***/ 91:
false,

/***/ 92:
false,

/***/ 93:
false,

/***/ 94:
false,

/***/ 95:
false,

/***/ 96:
false,

/***/ 97:
false,

/***/ 98:
false,

/***/ 99:
false

})