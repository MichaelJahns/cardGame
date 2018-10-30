//Global Variables
var health = 50;
var hope = 50;
var resource = 50;
var protection = 50;
//Shuffle
function shuffle(deck){
  console.log(`Deck Reshuffled`)
  Card.cardDeck = deck.slice(0);
  for (var i = Card.cardDeck.length - 1; i > 0; i--) {
    var randomPosition = Math.floor(Math.random() * (i + 1));
    var temp = Card.cardDeck[i];
    Card.cardDeck[i] = Card.cardDeck[randomPosition];
    Card.cardDeck[randomPosition] = temp;
  }
  console.table(Card.cardDeck)
}
function updateStats(){
  document.getElementById('hopeBar').textContent = hope;
  document.getElementById('healthBar').textContent = health;
  document.getElementById('resourceBar').textContent = resource;
  document.getElementById('protectionBar').textContent = protection;
}
function updateHope(operation, value){
  if(operation === 'add'){
    hope += value;
  }
  if(operation === 'minus'){
    hope -= value;
  }
  if(operation === 'set'){
    hope = value
  }
  updateStats();
}
function updateHealth(operation, value){
  if(operation === 'add'){
    health += value;
  }
  if(operation === 'minus'){
    health -= value;
  }
  if(operation === 'set'){
    health = value
  }
  updateStats()
}
function updateResources(operation, value){
  if(operation === 'add'){
    resource += value;
  }
  if(operation === 'minus'){
    resource -= value;
  }
  if(operation === 'set'){
    resource = value
  }
  updateStats();
}
function updateProtection(operation, value){
  if(operation === 'add'){
    protection += value;
  }
  if(operation === 'minus'){
    protection -= value;
  }
  if(operation === 'set'){
    protection = value
  }
  updateStats();
}


function drawPhase(){
//render first three cards in Card.cardDeck to page
  if(Card.cardDeck.length < 3){
    shuffle(Card.allCards);
  }
  Card.displayCard = Card.cardDeck.splice(0, 3);
  for(var i = 0; i <= 2; i++){
    var idReference = Card.cardDeck[i].id;
    for(var j = 0; j < Card.allCards.length; j++){
      if(idReference === Card.allCards[j].id){
        document.getElementById(`card${i}`).innerHTML = Card.allCards[j].name;
      }
    }
  }
  // Card.cardDeck.splice(0, 3);
}

function saveState(){
  localStorage.cacheDisplay
  localStorage.cacheDeck
  localStorage.cacheAllCards
  localStorage.cacheStats
}

function handleStart(event){
  console.log('event started')
  shuffle(Card.allCards);
  drawPhase();
}
function handleSelection(){
  if(event.target.className === 'card'){
    for(var i = 0; i < Card.allCards.length; i++){
      if(event.target.innerText === Card.allCards[i].name)
      var temp = Card.allCards[i].id; 
      }  
      Card.functions[temp]();
      drawPhase();
  }



}

var startElement = document.getElementById('start');
var containerEL = document.getElementById('container');
startElement.addEventListener('click', handleStart);
containerEL.addEventListener('click', handleSelection);

