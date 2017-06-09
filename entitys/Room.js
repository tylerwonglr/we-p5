class Room {
	constructor (roomName){
		this.users = [];
		this.name = roomName;
	}
	
	//remove user from the currently rom
	removeUser(disconnectedSocketId){
		this.users.forEach((user, index)=>{
			if(disconnectedSocketId == user.socketId){
				this.users.splice(index, 1);
			}
		});
	}
	
	addUser(newUser){
		this.users.push(newUser);
	}
	
	get getNumberOfUsers(){
		return this.users.length;
	}
}

module.exports = Room;