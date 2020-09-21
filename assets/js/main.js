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
const nxtLevel = document.getElementById('nxtLvl')
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
    nxtLvl();
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



// function nxtLvl(cards) {
//     nxtLevel.classList.remove('show')

        // adicionar mais cartas
    // cardboard.innerHTML +=`
    // <div class="memoryCard" data-card="orange.png" >
    //     <img class="cardFront" src="imgs/orange.png">
    //     <img class="cardBack" src="imgs/deck.jpg">
    // </div>
    // <div class="memoryCard" data-card="avocado.png" ">
    //     <img class="cardFront" src="imgs/avocado.png">
    //     <img class="cardBack" src="imgs/deck.jpg">
    // </div>`


        // desvirar as cartas
    // cards.forEach(card => card.classList.remove('flip'))
    // function turnOver() {
    //     cards[0].classList.remove('flip')
    //     cards[1].classList.remove('flip')
    // };


        // bagunçar o tabuleiro
    // (function aleatory() {
    //     cards.forEach(card => {
    //         let rand = Math.floor(Math.random() * 12);
    //         card.style.order = rand
    //     });
    // })();

        // habilitar o click
    // cards.forEach(card => card.addEventListener('click', flipCard))

    // turnOver()
// }

function nxtLvl() {
    // var box = document.getElementById('box')
    

    // cards.forEach(card => {
    //     if (card.className == 'memoryCard flip') {
    //         setTimeout(() => {

    //             box.innerHTML = `<div class='complete'><p class='congrats'>Você completou o jogo!<br> <spam>Parabéns!</spam></p>
    //         <img src="imgs/brabo.png" alt="lanso a braba fdp">
    //         <button class='playAgain'><a href='index.html'>Jogar Novamente!</a></button>
    //         <a class='copy' href='https://luscadev.com.br/' target='_blank'>Luscadev || 2020</a></div>` 
                                // nxtLevel.classList.add('show')
    //         }, 2000);
    //     }    
    // })

    if (cards[0].className == 'memoryCard flip' && cards[1].className == 'memoryCard flip' 
    && cards[2].className == 'memoryCard flip' && cards[3].className == 'memoryCard flip'
    && cards[4].className == 'memoryCard flip' && cards[5].className == 'memoryCard flip'
    && cards[6].className == 'memoryCard flip' && cards[7].className == 'memoryCard flip'){
    
        
        // setTimeout(() => {
        //     box.innerHTML = `<div class='complete'><p class='congrats'>Você completou o jogo!<br> <spam>Parabéns!</spam></p>
        //     <img src="imgs/brabo.png" alt="lanso a braba fdp">
        //     <button class='playAgain'><a href='index.html'>Jogar Novamente!</a></button>
        //     <a class='copy' href='https://luscadev.com.br/' target='_blank'>Luscadev || 2020</a></div>` 
        // }, 2000);

            // adicionar um próximo nvl
        setTimeout(() => {
            nxtLevel.classList.add('show')
        }, 1500);
    }
}

// add eventListener
cards.forEach(card => card.addEventListener('click', flipCard))