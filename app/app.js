//Global Variables
var health = 50;
var hope = 50;
var resources = 50;
var protection = 50;
//Shuffle
function shuffle(deck){
  Card.cardDeck = deck.splice(0);
  console.table(Card.cardDeck)
  for (var i = Card.cardDeck.length - 1; i > 0; i--) {
    var randomPosition = Math.floor(Math.random() * (i + 1));
    var temp = Card.cardDeck[i];
    Card.cardDeck[i] = Card.cardDeck[randomPosition];
    Card.cardDeck[randomPosition] = temp;
  }
  console.table(Card.cardDeck)
}

function drawPhase(){
//render first three cards in Card.cardDeck to page
//   for(var i = 0; i <= 2; i++){
//     var idReference = Card.cardDeck[i].id;
//     for(var j = 0; j < Card.allCards.length; j++){
//       if(idReference === Card.allCard[j].id){
//           //render image
//           //render name
//           //render description
//       }
//     }
//   }
  Card.cardDeck.splice(0, 3);
  console.table(Card.cardDeck)
}

function handleStart(){
  console.log('event started')
  shuffle(Card.allCards);
}

var startElement = document.getElementById('start');
startElement.addEventListener('click', handleStart);
