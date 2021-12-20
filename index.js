let sum = 0
let cards = []
let hasBlackjack = false
let isAlive = false
let message = " "

let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
    name: "You have",
    chips: 69
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips

//random number generator
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

// start
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()    
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

//render messages
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you wanna draw a new card?"
    } else if (sum === 21) {
        message = "Yay!! You've got Blackjack"
        hasBlackjack = true
    } else {
        message = "You suck!"
        isAlive = false
    }
    messageEl.textContent = message
}

//new card
function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()  
    }
    
}