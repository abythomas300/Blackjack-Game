let messageEl = document.querySelector("#message-el");
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");
let hasBlackjack = false;
let isAlive = true;
let message = '';
let sumOfCards = 0;
let cards = [];
let playerName = document.querySelector("#player-name");
let playerChips = document.querySelector("#player-score");

let player = {
    name:"Aby Thomas",
    chips: 170
};

playerName.textContent = "Player:"+player.name;
playerChips.textContent = "Player Chips: $"+player.chips;

let age = 25;


// Method to check user age 
if(age >= 21) {
    console.log("Welcome to The Blackjack Game.")
}else{
    console.log("You cannot enter the game due to age restriction.");
}


// Method to pick a random card
function pickCard() {

    let pickedCard = Math.floor( Math.random()*13 ) + 1;
     console.log("Picked card", pickedCard);
     if(pickedCard === 1) {
        return 11;
     }else if(pickedCard >= 11 && pickedCard <= 13) {
        return 10;
     }else {
        return pickedCard;
     }

}


// Method to start the game
function startGame() {
    
    hasBlackjack = false;                            // resetting status at the start of a new game
    isAlive = true;

    firstCard = pickCard();
    secondCard = pickCard();

    cards = [firstCard, secondCard];                  //Storing generated cards to array for accessibility 

    cardsEl.textContent = "Cards:";                   //resetting old value inside cardsEl otherwise the existing first two card value get repeatedly displayed.
    sumOfCards = 0;                                   //resetting value of sum

    resetTextProperties();

    showPickedCards();
    sumPickedCards();

    cardsEl.textContent = trim(cardsEl.textContent);
    sumEl.textContent = `Total Value: ${sumOfCards}`;

    checkScore();

}


// Method to pick extra cards
function pickAnotherCard() {

    resetTextProperties();

    if(hasBlackjack == false && isAlive == true) {
        let newCard = pickCard();                         //picking new card

        cards.push(newCard);                              //adding the newly picked card to array  

        cardsEl.textContent = "Cards:";                   //resetting old value inside cardsEl otherwise the existing first two card value get repeatedly displayed.
        sumOfCards = 0;

        resetTextProperties();

        showPickedCards();
        sumPickedCards();

        cardsEl.textContent = trim(cardsEl.textContent);  //updating card-el value on screen
        sumEl.textContent = `Total Value: ${sumOfCards}`; //updating sum-el value on screen

        checkScore();

    } else {
        console.log("Cannot pick another card!")
        messageEl.textContent = "Cannot pick another card!"
        messageEl.style.color = "red";
    }
    
}


// Method to check final result and display message
function checkScore() {

    resetTextProperties();

    if(sumOfCards <= 20) {
        // Checking score
        message = "Do you want to draw another card?";

    }else if(sumOfCards === 21) {
        hasBlackjack = true;
        message = "Blackjack! You won 1.5x of your bet value.";
        messageEl.style.color = "gold"; 
        messageEl.style.webkitTextStroke = '1px blue';
        messageEl.style.fontSize = "larger";
    }else {
        isAlive = false;
        message = "You lost your money to the dealer.";
        messageEl.style.color = "red";                         // change color to red to highlight warning
    }
    // Final message
    messageEl.textContent = message;
}


// Method to trim the excess comma from resulting string
function trim(toTrimText) {  
    let trimmedText = toTrimText.slice(0, -1);
    return trimmedText;
}


// Method to sum the values of picked cards
function sumPickedCards() {

    for(let i = 0; i < cards.length; i++) {           
         sumOfCards += cards[i];                     
    }

}


// Method to display picked cards
function showPickedCards() {

    for(let i = 0; i < cards.length; i++) {           
        cardsEl.textContent += ` ${cards[i]},`;                    
    }

}


// Method to reset text properties
function resetTextProperties() {

    messageEl.style.color = "white";                  
    messageEl.style.webkitTextStroke = null;
    messageEl.style.fontSize = "large";
    
}