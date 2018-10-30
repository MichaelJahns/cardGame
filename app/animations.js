
function stopShuffle(){
  document.getElementById('deck0').className = 'deck'
  document.getElementById('deck1').className = 'deck'
  document.getElementById('deck2').className = 'deck'
}
function animateShuffle(){
  document.getElementById('deck0').className = 'animateDeck0'
  document.getElementById('deck1').className = 'animateDeck1'
  document.getElementById('deck2').className = 'animateDeck2'
  setTimeout(stopShuffle, 6000)
}

function stopDraw(){
  document.getElementById('deck0').className = 'deck'
  document.getElementById('deck1').className = 'deck'
  document.getElementById('deck2').className = 'deck'
}
function animateDraw(){
    console.log('I was entered')
  document.getElementById('deck0').className = 'animateCard0'
  document.getElementById('deck1').className = 'animateCard1'
  document.getElementById('deck2').className = 'animateCard2'
  setTimeout(stopDraw, 1999)
}
