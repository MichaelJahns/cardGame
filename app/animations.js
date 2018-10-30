
function stopShuffle(){
  document.getElementById('deck0').className = ''
  document.getElementById('deck1').className = ''
  document.getElementById('deck2').className = ''
}
function animateShuffle(){
  document.getElementById('deck0').className = 'animateDeck0'
  document.getElementById('deck1').className = 'animateDeck1'
  document.getElementById('deck2').className = 'animateDeck2'
  setTimeout(stopShuffle, 6000)
}

function stopDraw(){
  document.getElementById('card0').classname = ''
  document.getElementById('card0').classname = ''
  document.getElementById('card0').classname = ''
}
function animateDraw(){
  document.getElementById('card0').classname = 'animateCard0'
  document.getElementById('card0').classname = 'animateCard1'
  document.getElementById('card0').classname = 'animateCard2'
}
