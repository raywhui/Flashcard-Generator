//Scope-safe constructors
//instanceof - returns true if 'this' object is a BasicCard instead of the window

function BasicCard(front,back){
	if (this instanceof BasicCard){
		this.front = front;
		this.back = back;
	}else{
		return new BasicCard(front,back);
	}
};

//if new is not specified, will return else statement (new BasicCard(STUFF))
//No need for new statements now.

var test = BasicCard("Who was the first president of the United States?", "George Washington");

console.log('Front:', test.front);
console.log('Back:', test.back);

module.exports = BasicCard;