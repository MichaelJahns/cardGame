//Helper Functions
//++++++++++++++++

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

function drawPhase(){
  //Shuffle if cant draw three cards
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
        //document.getElementById(`card${i}img`).src = Card.displayCard[j].name;
        document.getElementById(`card${i}section`).innerHTML = Card.displayCard[j].storyline;
      }
    }
  }
  Card.cardDeck.splice(0, 3);
}

function turnCounter(){
  Card.totalTurns += 1;
  localStorage.setItem('pastClicked', JSON.stringify(Card.totalTurns));
  document.getElementById('TotalClick').innerHTML = 'Turns Survived : ' + Card.totalTurns;
}
//Update Game Stats
function updateStats(){
  document.getElementById('hopeBar').textContent = Card.gamestats['hope'];
  document.getElementById('healthBar').textContent = Card.gamestats['health'];
  document.getElementById('resourceBar').textContent = Card.gamestats['resource'];
  document.getElementById('protectionBar').textContent = Card.gamestats['protection'];
}
function updateHope(operation, value){
  if(operation === 'add'){
    Card.gamestats['hope'] += value;
  }
  if(operation === 'minus'){
    Card.gamestats['hope'] -= value;
  }
  if(operation === 'set'){

    Card.gamestats['hope'] = value
  }
  if(Card.gamestats['hope'] < 0){
    Card.gamestats['hope'] = 0;
  }
  if(Card.gamestats['hope'] > 100){
    Card.gamestats['hope'] = 100;
  }
  updateStats();
}
function updateHealth(operation, value){
  if(operation === 'add'){
    Card.gamestats['health'] += value;

  }
  if(operation === 'minus'){
    Card.gamestats['health'] -= value;
  }
  if(operation === 'set'){
    Card.gamestats['health'] = value
  }
  if(Card.gamestats['health'] < 0){
    Card.gamestats['health'] = 0;
  }
  if(Card.gamestats['health'] > 100){
    Card.gamestats['health'] = 100;
  }
  updateStats();
}
function updateResources(operation, value){
  if(operation === 'add'){
    Card.gamestats['resource'] += value;
  }
  if(operation === 'minus'){
    Card.gamestats['resource'] -= value;
  }
  if(operation === 'set'){
    Card.gamestats['resource'] = value
  }
  if(Card.gamestats['resource'] < 0){
    Card.gamestats['resource'] = 0;
  }
  if(Card.gamestats['resource'] > 100){
    Card.gamestats['resource'] = 100;
  }
  updateStats();
}
function updateProtection(operation, value){
  if(operation === 'add'){
    Card.gamestats['protection'] += value;

  }
  if(operation === 'minus'){
    Card.gamestats['protection'] -= value;

  }
  if(operation === 'set'){
    Card.gamestats['protection'] = value
  }
  if(Card.gamestats['protection'] < 0){
    Card.gamestats['protection'] = 0;
  }
  if(Card.gamestats['protection'] > 100){
    Card.gamestats['protection'] = 100;
  }
  updateStats();
}
//Data Permanence
function saveState(){

  localStorage.cacheDisplay = JSON.stringify(Card.displayCard)
  localStorage.cacheDeck = JSON.stringify(Card.cardDeck)
  localStorage.cacheAllCards = JSON.stringify(Card.allCards)
  localStorage.cacheStats = JSON.stringify(Card.gamestats)
}
//Event Handlers
//++++++++++++++

function handleStart(event){
  // Card.gameInProgress = true; IS THIS NECESSARY FOR GAME RESUME FUNCTIonalITy
  document.getElementById('start').style.visibility = 'hidden';
  shuffle(Card.allCards);
  setTimeout(drawPhase, 6000);
}
function handleSelection(){
  if(event.target.className === 'card')
  {
    console.log(event.target.querySelector('h4'))
    for(var i = 0; i < Card.allCards.length; i++){
      if(event.target.querySelector(`h4`).innerHTML === Card.allCards[i].name)
        var temp = Card.allCards[i].id;
    }
  }else{
    console.log(event.target.parentNode.querySelector('h4'))
    for(var i = 0; i < Card.allCards.length; i++){
      if(event.target.parentNode.querySelector(`h4`).innerHTML === Card.allCards[i].name)
        var temp = Card.allCards[i].id;
    }
  }
  console.log(temp)
  Card.functions[temp]();

  setTimeout(testForGameOver, 300)
  setTimeout(drawPhase, 300)
  setTimeout(turnCounter, 300)
  // saveState();

}
function testForGameOver(){
  if(Card.gamestats['hope'] === 0 ||Card.gamestats['health'] === 0 ||Card.gamestats['resource'] === 0 || Card.gamestats['protection'] === 0){

    alert('You lost. You ran out of resources!')

    localStorage.setItem('userTurns', JSON.stringify({'clicks':Card.totalClicks}))
    console.log(Card.totalClicks);
    console.log(localStorage.endGameStats);
    console.log(localStorage.submit);
    localStorage.setItem('endGameStats', JSON.stringify({'Card.gamestats["hope"]': Card.gamestats['hope'], 'Card.gamestats["health"]':Card.gamestats['health'], 'Card.gamestats["resource"]': Card.gamestats['resource'], 'Card.gamestats["protection"]': Card.gamestats['protection'], 'clicks':Card.totalClicks}))


    window.location.href = 'gameOver.html';
  }
}

//++++++++++++++
//ExecutableCode

var startElement = document.getElementById('start');
startElement.addEventListener('click', handleStart);


var cardEl0 = document.getElementById('card0')
cardEl0.addEventListener('click', handleSelection)
var cardEl1 = document.getElementById('card1')
cardEl1.addEventListener('click', handleSelection)
var cardEl2 = document.getElementById('card2')
cardEl2.addEventListener('click', handleSelection)
