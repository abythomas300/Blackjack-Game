let hasBlackjack = false;
let isAlive = true;
let message = '';

// User age check
let age = 25;

if(age >= 21) {
    console.log("Welcome to The Blackjack Game.")
}else{
    console.log("You cannot enter the game due to age restriction.");
}


// Picking cards 
function pickCard() {
    return Math.floor( ( Math.random()*(11 - 2 + 1) ) +2 );
}


let firstCard = pickCard();
console.log("Your first card:", firstCard)
let secondCard = pickCard();
console.log("Your second card:", secondCard)
let sumOfCards = firstCard + secondCard;
console.log("Your total card value:", sumOfCards)


// Checking score
if(sumOfCards <= 20) {
    message = "You want to draw another card?";
}else if(sumOfCards === 21) {
    hasBlackjack = true;
    message = "Blackjack! You won 1.5x you bet value.";
}else {
    isAlive = false;
    message = "Alas, you bust. You lost your money to the dealer.";
}

// Final message
console.log(message);