class User {
	constructor ({ name, socketId, ready }){
		this.name = name;
		this.socketId = socketId;
		this.score = 0;
		this.ready = ready;
	}
	
	set setScore(newScore){
		this.score = newScore;
	}
}

module.exports = User;