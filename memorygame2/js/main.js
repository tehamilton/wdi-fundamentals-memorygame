//console.log("Up and running!");
//let cardOne = "queen";
//let cardTwo = "queen";
//let cardThree = "king";
//let cardFour = "king";
//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardFour);

let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];

let cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

let cardTwo = cards[2]

cardsInPlay.push(cardTwo);

console.log("User flipped " + cardTwo)

if (cardsInPlay.length === 2) {
	
	if (cardsInPlay[0] === cards[2]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}
