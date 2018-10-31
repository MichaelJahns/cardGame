//Global Variables
var health = 50;
var hope = 50;
var resource = 50;
var protection = 50;


//Shuffle
function shuffle(deck){
  animateShuffle();
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
    hope = value;
  }
  if(hope < 0){
    hope = 0;
  }
  if(hope > 100){
    hope = 100;
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
  if(health < 0){
    health = 0;
  }
  if(health > 100){
    health = 100;
  }
  updateStats();
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
  if(resource < 0){
    resource = 0;
  }
  if(resource > 100){
    resource = 100;
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
  if(protection < 0){
    protection = 0;
  }
  if(protection > 100){
    protection = 100;
  }
  updateStats();
}


function drawPhase(){
//render first three cards in Card.cardDeck to page
  if(Card.cardDeck.length < 3){
    shuffle(Card.allCards);
  }
  animateDraw();
  Card.displayCard = Card.cardDeck.slice(0, 3);

  for(var i = 0; i <= 2; i++){
    var idReference = Card.cardDeck[i].id;
    for(var j = 0; j < Card.displayCard.length; j++){
      if(idReference === Card.displayCard[j].id){
        document.getElementById(`card${i}title`).innerHTML = Card.displayCard[j].name;
        //        document.getElementById(`card${i}img`).src = Card.displayCard[j].name;
        document.getElementById(`card${i}section`).innerHTML = Card.displayCard[j].storyline;
      }
    }
  }
  Card.cardDeck.splice(0, 3);
}

function saveState(){
  localStorage.cacheDisplay = JSON.stringify(Card.displayCard)
  localStorage.cacheDeck = JSON.stringify(Card.cardDeck)
  localStorage.cacheAllCards = JSON.stringify(Card.allCards)
  // localStorage.cacheStats = JSON.stringify(Card)
}

var button = document.getElementById('container');

function turnCounter(){
  Card.totalClicks += 1;
  console.log(Card.totalClicks);
  localStorage.setItem('pastClicked', JSON.stringify(Card.totalClicks));
  document.getElementById('TotalClick').innerHTML = 'Turns Survived : ' + Card.totalClicks;
}

function handleStart(event){
  // Card.gameInProgress = true; IS THIS NECESSARY FOR GAME RESUME FUNCTIonalITy
  document.getElementById('start').style.visibility = 'hidden';

  console.log('event started')
  shuffle(Card.allCards);
  setTimeout(drawPhase, 6000);

}
function handleSelection(){
  if(event.target.className === 'card'){
    for(var i = 0; i < Card.allCards.length; i++){
      if(event.target.querySelector(`h2`).innerHTML === Card.allCards[i].name)
        var temp = Card.allCards[i].id;
    }
    Card.functions[temp]();

    gameOverPage();
    drawPhase();

    turnCounter()
    // saveState();

  }
  function gameOverPage(){
    if
    (hope === 0 ||
      health === 0 ||
      resource === 0 ||
      protection === 0 ){

      alert('You lost. You ran out of resources!')

      localStorage.setItem('userTurns', JSON.stringify({'clicks':totalClicks}))
      console.log(totalClicks);
      console.log(localStorage.endGameStats);
      console.log(localStorage.submit);
      localStorage.setItem('endGameStats', JSON.stringify({'hope': hope, 'health':health, 'resource': resource, 'protection': protection, 'clicks':Card.totalClicks}))

      window.location.href = 'gameOver.html';
    }
  }
}
var startElement = document.getElementById('start');
var containerEL = document.getElementById('container');
startElement.addEventListener('click', handleStart);
containerEL.addEventListener('click', handleSelection);

