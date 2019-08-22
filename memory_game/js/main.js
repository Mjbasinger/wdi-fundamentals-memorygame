console.log("Up and running!");

//console.log("user flipped " + cardOne);
//console.log("user flipped " + cardThree);

var cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[3];
	cardsInPlay.push(cardOne);
		console.log("User flipped queen");
	cardsInPlay.push(cardTwo);
		console.log("user flipped king");
	if (cardsInPlay.length === 2) {	
		console.log("Two cards in play.");
} 
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("you've found a match!"); 
} else if (cardsInPlay[0] !== cardsInPlay[1]) {
	alert("Sorry, try again!");
}


