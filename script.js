let messageEl = document.querySelector("#message-el");
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");
let hasBlackjack = false;
let isAlive = true;
let message = '';
let sumOfCards = 0;
let cards = [];


let age = 25;


// MEthod to check user age 
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
    
    firstCard = pickCard();
    console.log("First card:", firstCard);
    secondCard = pickCard();
    console.log("Second:", secondCard);
    cards = [firstCard, secondCard];                 //Storing generated cards to array for accessibility 
    console.log(cards);
    cardsEl.textContent = "Cards:";                   //resetting old value inside cardsEl otherwise the existing first two card value get repeatedly displayed.
    sumOfCards = 0;                                   //resetting value of sum
    for(let i = 0; i < cards.length; i++) {           
        cardsEl.textContent += `${cards[i]},`;  
        sumOfCards += cards[i];                     
    } 
    let toTrimText = cardsEl.textContent;          
    let trimmedText = toTrimText.slice(0, -1);
    cardsEl.textContent = trimmedText;
    sumEl.textContent = `Total Value: ${sumOfCards}`;
    checkScore();

}

//Method to pick extra cards
function pickAnotherCard() {

    let newCard = pickCard();                         //picking new card
    cards.push(newCard);                              //adding the newly picked card to array           
    cardsEl.textContent = "Cards:";                   //resetting old value inside cardsEl otherwise the existing first two card value get repeatedly displayed.
    sumOfCards = 0;
    for(let i = 0; i < cards.length; i++) {           
        cardsEl.textContent += ` ${cards[i]},`;
        sumOfCards += cards[i];                       //adding all cards to calculate total value
    } 
    let toTrimText = cardsEl.textContent;          
    let trimmedText = toTrimText.slice(0, -1);        //removing excess comma
    cardsEl.textContent = trimmedText;                //updating card-el value on screen
    sumEl.textContent = `Total Value: ${sumOfCards}`; //updating sum-el value on screen
    checkScore();
    
}


//Method to check final result and display message
function checkScore() {

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
