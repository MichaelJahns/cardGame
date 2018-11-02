
function Card(id, name, storyline, description){
  this.id = id;
  this.name = name;
  this.storyline = storyline;
  this.description = description;

  Card.allCards.push(this);
}
Card.totalTurns = 0;
Card.gameInProgress = false;
Card.allCards = [];
Card.cardDeck = [];
Card.displayCard = [];
Card.gamestats = {
  health: 50,
  hope: 50,
  resource: 50,
  protection: 50
}
Card.befriendMerchant = false;
Card.loveMerchant = false;
Card.functions= {
  1: card1,
  2: card2,
  3: card3,
  4: card4,
  5: card5,
  6: card6,
  7: card7,
  8: card8,
  9: card9,
  10: card10,
  11: card11,
  12: card12,
  13: card13,
  14: card14,
  15: card15,
  16: card16,
  17: card17,
  18: card18,
  19: card19,
  20: card20,
  21: card21,
  22: card22,
  23: card23,
  24: card24,
  25: card25,
  26: card26,
  27: card27,
  28: card28,
  29: card29,
  30: card30,
  31: card31,

}
//++++++++++++++
//Nightmare Card
new Card(1, 'Approach Robed Stranger', 'You are strong child, but I am beyond strength', 'all survival stats set to zero');
function card1(){
  if(Card.gamestats["health"] === 100 || Card.gamestats["hope"] === 100 || Card.gamestats["resource"] === 100 || Card.gamestats["protection"] === 100){
    alert("You are strong child. I will permit you past me this once. Speak of this to no one")
  } else {
  updateHealth('set', 0);
  updateHope('set', 0)
  updateResources('set', 0)
  updateProtection('set', 0)
  }
}
new Card(2, 'Large Footprints','You stumpble upon large footprints in the underbrush, and decide to track the beast.', 'Drop to 1 hp')
function card2(){
  updateHealth('set', 1);
}
new Card(3, 'Bad Omen' ,'Sky Darkens, Crow Caws, You lose all hope', 'Drop to 1 hope');
function card3(){
  updateHope('set', 1);
}
new Card(4, 'Encounter Highwaymen', 'Rogues and cut throats block your path.', 'Drop to 1 resources');
function card4(){
  updateResources('set', 1);
}
new Card(5, 'Dark Skies','A storm growls in the distance, gale force winds render your shelter meaningless in its harsh rain', 'Drop to 1 protection')
function card5(){
  updateProtection('set', 1);
}

//++++++++++++++++++
//Net Positive Cards
new Card(6, 'Good night Sleep', 'Despite your pains, you slept well and are ready for a new Day', '+health')
function card6(){
  updateHealth('add', 5);
}
new Card(7, 'Signs of Society' , 'Smoke blooms overhead in a hundred gray pillars, you are hopefull you will find your way home', '+hope');
function card7(){
  updateHope('add', 5);
}
new Card(8, 'Scrounge in a Quarry', 'Look for a primitive weapon; a sharp rock or club like stick', '+resource')
function card8(){
  updateResources('add', 5);
}
new Card(9, 'Seek Shelter', 'A storm brews behind you, you need a place to weather to storm', '+ protection')
function card9(){
  updateProtection('add', 5);
}
//++++++++++++++++++
//Net Negative Cards
new Card(10, 'Beast', 'You have a encounter with the local wildlife.', '--hp')
function card10(){
  updateHealth('minus', 15);
}
new Card(11, 'Solitude', 'Isolation of your stranded misadventures cling to you' , '--hope')
function card11(){
  updateHope('minus', 15);
}
new Card(12, 'Roaming Banditos', 'Abandon your materials to avoid a run-in with the unsavory inhabitants of the woods', '--resources')
function card12(){
  updateResources('minus', 15);
}
new Card(13, 'Shrill Wind', 'The last storm destroyed your home, you have to build another shelter from scratch.', '--Protection')
function card13(){
  updateProtection('minus', 15);
}
//++++++++++++++++++++++++++++++++++
//Mostly Negative Hybrid Value Cards
new Card(14, 'Food Caravan','Your path meets you with a food caravan. They wont take you into the city, but they will trade you some apples', '-- resource + hp')
function card14(){
  updateResources('minus', 20);
  updateHealth('add', 5);
}
new Card(15, 'Create Hearth', 'Prepare for the long night by spending the twilight hours building a fire.', '--resource +protection')
function card15(){
  updateResources('minus', 15);
  updateProtection('add', 5);
}
new Card(16, 'River Water' ,'It taste funny, but damn is it hydrating' , '--hope +hp')
function card16(){
  updateHope('minus', 25);
  updateHealth('add', 10);
}
new Card(17, 'Be Merry','You choose to forget your woes. Chase the butterflies, jump at the rainbows, dance in the rain','--protection +hope')
function card17(){
  updateProtection('minus', 30);
  updateHope('add', 15);
}
new Card(18, 'Corpse in the Clearing' ,'A well equipped corpse decays in a clearning. It looks like someone you once kew. Despair blossoms in your mind, but you loot the corpse.', '--hope +resources', )
function card18(){
  updateHope('minus', 25);
  updateResources('add', 15);
}
//++++++++++++++++++++++++++++++++++
//Mostly Positive Hybrid Value Cards
new Card(19, 'Exhausting Hunt', 'You chase your game for miles and miles, but your will to eat outmatches its survival instincts.', '++resource -hp')
function card19(){
  updateResources('add', 20);
  updateHealth('minus', 10);
}


//++++++++++++++++++
//Triple Value Cards
new Card(20, 'Wandering Vegabond', 'You chance upon a grizzled but friendly traveler coming from colder climates. They offer a trade for their thick winter coat', '--- resource + protection +hope')
function card20(){
  updateResources('minus', 30);
  updateProtection('add', 5);
  updateHope('add',10);
}
// Expansion
// +++++++++++++++++++++++++++
new Card(21, 'Befriend Merchant', 'It is willing to trade.', 'Adds merchant expansion cards')
function card21(){
if(Card.befriendMerchant === false){
  new Card(22,'Meet merchant by a pond', 'Merchant is selling elixirs. You buy one.', '++ health -- resources')
  new Card(23, 'Trapped in a Bog!', 'The merchants wares are going no where trapped in that bog! He offers some means of protection for your aid', '++ protection -- health' )
  new Card(24, 'Fight Merchant', 'You receive the beating of your lifetime. However, you manage to stab it in the heart', 'Drop to 1 hp and up 100 resources')
  new Card(25, 'Merchant offers non FDA approved elixir', 'The bottle looks disgusting, but you drink it anyway. Merchant is incredibley charming after all.' , 'Drop to 1 hp and up 100 hope')
  new Card(26, 'Merchant gives you survival advice', 'Merchant tells you how it survived all these years. You realize your odds of finding your way home are slim to none', '++ protection -- hope')
  new Card(27, 'Overstock Issues', 'The Merchant has more resources than they can carry. Everything must go! You\'re doing Merchant a favor by taking some', '++ resources')

  new Card(31, 'Fall for the Merchant', 'Something about that amourphous blob has your heart bubbling. Do you give in to these feelings.', 'Adds OP merchant expansion cards')
  for(var i = 1; i < 8; i++){
    Card.cardDeck.push(Card.allCards[20+i])

  }
  shuffle(Card.cardDeck)
  Card.befriendMerchant = true
} else{
  updateHealth('add', 5)
  updateHope('add', 5)
  updateProtection('add', 5)
  updateResources('add', 5)
}
}


  function card22() {
    updateResources('minus', 10);
    updateHealth('add', 20);
  }

  function card23() {
    updateProtection('add', 30);
    updateHealth('minus', 10);
  }

  function card24(){
    updateHealth('set', 1);
    updateResources('add', 75);
  }

  function card25(){
    updateHealth('set', 1);
    updateHope('add', 75);
  }

  function card26(){
    updateProtection('add', 20);
    updateHope('minus', 50);
  }

  function card27(){
    updateResources('add', 50);
  }

function card31(){
  if(Card.loveMerchant === false){
  new Card(28, 'Merchant knows the way out', 'Merchant tells you that it knows how you can get home, but will only tell you if you when you are ready', '++ hope')
  new Card(29, 'Merchant is in trouble', 'You happen upon Merchant fending off Banditos. You help and in the scuffle you are slightly injured. As thanks Merchant gives you an insolated tarp for your shelter.', '+++ protection')
  new Card(30, 'Merchant has all the bacons', 'Merchant has been holding out on you. You discover the it has all the bacons. You demand that Merchant shares. Merchant obliges', '+++ health')
  for(var i = 1; i < 4; i++){
    Card.cardDeck.push(Card.allCards[20+i])
  }
  shuffle(Card.cardDeck)
  Card.loveMerchant = true
  }else{
  updateHealth('add', 15)
  updateHope('add', 15)
  updateProtection('add', 15)
  updateResources('add', 15)
}
}
function card28(){
  updateHope('add', 100);
}

function card29(){
  updateProtection('add', 100)
}

function card30(){
  updateHealth('add', 200)
}

