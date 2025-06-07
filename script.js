let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let hasBlackjack = false;
let isAlive = true;
let message = '';


let age = 25;


// MEthod to check user age 
if(age >= 21) {
    console.log("Welcome to The Blackjack Game.")
}else{
    console.log("You cannot enter the game due to age restriction.");
}


// Method to pick a random card
function pickCard() {
    return Math.floor( ( Math.random()*(11 - 2 + 1) ) +2 );
}


// Method to start the game
function startGame() {

    let firstCard = pickCard();
    let secondCard = pickCard();
    let sumOfCards = firstCard + secondCard;
    cardsEl.textContent = `Cards: ${firstCard} and ${secondCard}`;
    sumEl.textContent = `Total Value: ${sumOfCards}`;

    if(sumOfCards <= 20) {
        // Checking score
        message = "Do you want to draw another card?";

    }else if(sumOfCards === 21) {
        hasBlackjack = true;
        message = "Blackjack! You won 1.5x of your bet value.";
    }else {
        isAlive = false;
        message = "You lost your money to the dealer.";
    }

    // Final message
    messageEl.textContent = message;
}