function touchDeck(type, count, touch, morphTo, needsI){
  if(needsI === true){
    for(var i = 0; i <= count; i++){
      document.getElementById(type+i).setAttribute(touch, morphTo+i)
    }
  }
  if(needsI === false){
    for(var j = 0; j <= count; j++){
      document.getElementById(type+j).setAttribute(touch, morphTo)
    }
  }
}
function stopShuffle(){
  touchDeck('deck', 2, 'class', 'deck', false)
}
function animateShuffle(){
  touchDeck('deck', 2, 'class', `animateDeck`, true)
  setTimeout(stopShuffle, 6000)
}
function hideCards(){
  touchDeck('card', 2, 'style', 'display:none', false)
}
function revealCards(){
  touchDeck('card', 2, 'style', 'display:block', false)
}
function stopDraw(){
  touchDeck('deck', 2, 'class', 'deck', false)
}
function animateDraw(){
  hideCards();
  touchDeck('deck', 2, 'class', 'animateCard', true)
  setTimeout(stopDraw, 1999)
  setTimeout(revealCards, 1999)
}
function highlightElement(target, type){
  document.getElementById(target).setAttribute('class', type);
  setTimeout(hightlightStop, 500)
}
function hightlightStop(){
  document.getElementById('hopeBar').setAttribute('class', 'none')
  document.getElementById('healthBar').setAttribute('class', 'none')
  document.getElementById('resourceBar').setAttribute('class', 'none')
  document.getElementById('protectionBar').setAttribute('class', 'none')
}
