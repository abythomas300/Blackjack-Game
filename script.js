let messageEl = document.querySelector("#message-el");
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");
let hasBlackjack = false;
let isAlive = true;
let message = '';
let sumOfCards = 0;


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
    sumOfCards = firstCard + secondCard;
    cardsEl.textContent = `Cards: ${firstCard}, ${secondCard}`;
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


function pickAnotherCard() {

    let newCard = pickCard();                         // picking new card
    cardsEl.textContent += `, ${newCard}`;            // updating card-el value on screen
    sumOfCards += newCard;                            // updating total value
    sumEl.textContent = `Total Value: ${sumOfCards}`; //updating sum-el value on screen
    
}
