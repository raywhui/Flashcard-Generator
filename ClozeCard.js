function ClozeCard(text, cloze){
	if (this instanceof ClozeCard){
		//deleted text
		this.cloze = cloze;

		//Full text
		this.fullText = text;
	}else{
		return new ClozeCard(text, cloze);
	}
}

ClozeCard.prototype.partial = function(){
	var splitFull = this.fullText.split(this.cloze);

	var index = splitFull.indexOf('');

	var checkIfExists = this.fullText.indexOf(this.cloze);

	//this assumes that the cloze text only occurs once in the fullText string.
	//First condition, if the cloze word exists at the beginning or end of fullText string.
	if (index !== -1){
		splitFull.splice(index,1,'...');

		return splitFull.join('');

	//Second condition, if the cloze word exists in the middle of the fullText string.
	}else if (index === -1 && checkIfExists !== -1){
		splitFull.splice(1,0,'...');

		return splitFull.join('');

	//Third condition, if the cloze word doesn't exist in the fullText string.
	}else{
		 return "This doesn't work. Do another one.";
	}

};

//First condition

var dude = ClozeCard("George Washington was the first president of the United States.", "George Washington");

console.log('Cloze:', dude.cloze);
console.log('Full Text:', dude.fullText);
console.log('Partial:', dude.partial());

console.log('\n======================================================\n');

//Second Condition
var my = ClozeCard("First president George Washington of the United States.", "George Washington");

console.log('Cloze:', my.cloze);
console.log('Full Text:', my.fullText);
console.log('Partial:', my.partial());

console.log('\n======================================================\n');

//Third Condition
var ahhhhhhh = ClozeCard("First president of the United States.", "George Washington");

console.log('Cloze:', ahhhhhhh.cloze);
console.log('Full Text:', ahhhhhhh.fullText);
console.log('Partial:', ahhhhhhh.partial());



module.exports = ClozeCard;