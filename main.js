const cardboard = document.getElementById('cardBoard');

// create images
const images = [
    'avocado.png',
    'grape.png',
    'strawberry.png',
    'watermelon.png',
];
let cardHTML = '';

images.forEach(img => {
    cardHTML +=
        `<div class='memoryCard' data-card='${img}'>
        <img class='cardFront' src="imgs/${img}">
        <img class='cardBack' src="imgs/deck.jpg">
    </div>`
});
cardboard.innerHTML = cardHTML + cardHTML;

const cards = document.querySelectorAll('.memoryCard');
let firstCard, secondCard;
let lockCard = false;

// turn the cards over
function flipCard() {
    if (lockCard) return false;
    this.classList.add('flip')
    if (!firstCard) {
        firstCard = this
        return false;
    }
    secondCard = this
    match();
}

// check if the cards are the same
function match() {
    let isMatch = firstCard.dataset.card == secondCard.dataset.card;
    !isMatch ? disableCards() : resetCards(isMatch);
    endGame();
}

// block cards
function disableCards() {
    lockCard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetCards();
    }, 1000);
}

// show random cards
(function aleatory() {
    cards.forEach(card => {
        let rand = Math.floor(Math.random() * 12);
        card.style.order = rand
    });
})();

// remove eventListener 
function resetCards(isMatch = false) {
    if (isMatch) {
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
    }
    [firstCard, secondCard, lockCard] = [null, null, false]
}

function endGame() {
    var box = document.getElementById('box')

    if (cards[0].className == 'memoryCard flip' && cards[1].className == 'memoryCard flip' 
    && cards[2].className == 'memoryCard flip' && cards[3].className == 'memoryCard flip'
    && cards[4].className == 'memoryCard flip' && cards[5].className == 'memoryCard flip'
    && cards[6].className == 'memoryCard flip' && cards[7].className == 'memoryCard flip') {
       
        setTimeout(() => {
            box.innerHTML = `<div class='complete'><p class='congrats'>Você completou o jogo!<br> <spam>Parabéns!</spam></p>
            <img src="imgs/brabo.png" alt="lanso a braba fdp">
            <button class='playAgain'><a href='index.html'>Jogar Novamente!</a></button>
            <a class='copy' href='https://luscadev.com.br/' target='_blank'>Luscadev || 2020</a></div>` 
        }, 2000);
    }
}

// add eventListener
cards.forEach(card => card.addEventListener('click', flipCard))