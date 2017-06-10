const UserClass = require('../entitys/User');
const RoomClass = require('../entitys/Room');

let colors = require('colors')

/* Rooms running in the server */
let rooms = [];

class Endpoints {
	setup(io){
		io.on('connection', function (socket) {
			// when the client emits 'add user', this listens and executes
			socket.on('add user', function (clientUser, fn) {
				console.log(clientUser);
				let User = new UserClass(clientUser);
				let Room;
				
				socket.roomName = 'Room'+Date.now();
				
				if(!rooms.length || rooms[rooms.length-1].getNumberOfUsers == 2){
					Room = new RoomClass(socket.roomName);
					Room.addUser(User);
					
					rooms.push(Room);
				}else {
					Room = rooms[rooms.length-1];
					Room.addUser(User);
				}
				
				
				fn({
					message: 'One user joined',
					room: Room
				});
				
				// echo globally (all clients) that a person has connected
				socket.broadcast.emit('user joined', {
					room: Room
				});
			});
			
			
			socket.on('disconnect', function () {
				rooms.forEach(function(room){
					if(room.name == socket.roomName){
						room.removeUser(socket.id);
					}
				});
				
				console.log('----------------------------------------------------'.green)
				console.log(`One user left`.green)
				console.log(rooms);
				console.log('----------------------------------------------------'.green)
				
				
				// echo globally that this client has left
				socket.broadcast.emit('user left', {
					roomName: socket.roomName
				});
			});
			
			
			socket.on('add score in user', function (clientUser, fn) {
				console.log('----------------------------------------------------'.green)
				console.log(`Score added in an user`.green)
				console.log(clientUser);
				console.log('----------------------------------------------------'.green)
				
				this.searchRoom(clientUser, function(room){
					return fn({
						message: 'Score added in an user',
						room: room
					});
				});
			});
		});
	}
	
	searchRoom(socket, callback){
		rooms.forEach(function(room){
			if(room.name == socket.roomName && callback){
				return callback(room);
			}
		});
	}
}

module.exports = Endpoints;