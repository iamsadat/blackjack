let player = {
    name: "User",
    chips: 200
}

let cards = []
let sum = 0;
let bet = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

function placeBet(){
    bet = parseInt(prompt("Enter bet amount : "));
    if (isNaN(bet) || bet <= 0 || bet > player.chips) {
        alert("Invalid bet amount!");  
      }
      if(isNaN(bet)){
        bet = 0;
      }
}

function startGame() {
    if(player.chips<=0){
        messageEl.textContent("Not enough chips to place the bet!");
    }
    else{
        placeBet();
        isAlive = true
        hasBlackJack = false;
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
    }
    
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        player.chips += bet * 2;
        playerEl.textContent = player.name + ": $" + player.chips;
    } else {
        message = "You're out of the game!"
        isAlive = false
        player.chips -= bet;
        playerEl.textContent = player.name + ": $" + player.chips;
    }
    messageEl.textContent = message
}




function restart(){
    messageEl.textContent = "Want to play another round?";
    cardsEl.textContent = "Cards : ";
    sumEl.textContent = "Sum : "
    sum = 0;
    bet =0;
    cards=[];
    player.chips = 200;
    playerEl.textContent = player.name + ": $" + player.chips;
    isAlive = false;
    haveBlackjack = false;
}
