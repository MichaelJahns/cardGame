
function Card(id, name,storyline, description){
  this.id = id;
  this.name = name;
  this.storyline = storyline;
  this.description = description;

  Card.allCards.push(this);
}
Card.allCards = [];
Card.cardDeck = [];
Card.displayCard = [];
Card.functions = {
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
}
//++++++++++++++
//Nightmare Card
new Card(1, 'Meet Death', 'You are strong child, but I am beyond strength ', 'all survival stats set to zero');
function card1(){
  updateHealth('set', 0);
  updateHope('set', 0)
  updateResources('set', 0)
  updateProtection('set', 0)
}
new Card(2, 'Get mauled','', 'Drop to 1 hp')
function card2(){
  updateHealth('set', 1);
}
new Card(3, 'find/witness bad thing' ,'', 'Drop to 1 hope');
function card3(){
  updateHope('set', 1);
}
new Card(4, 'Get Robbed', '', 'Drop to 1 resources');
function card4(){
  updateResources('set', 1);
}
new Card(5, 'Lose shelter','', 'Drop to 1 protection')
function card5(){
  updateProtection('set', 1);
}

//++++++++++++++++++
//Net Positive Cards
new Card(6, 'Good night Sleep', 'You slept well despite your pains', '+health')
function card6(){
  updateHealth('add', 5);
}
new Card(7, 'Signs of Society' , 'You see signs of soceity', '+hope');
function card7(){
  updateHope('add', 5);
}
new Card(8, 'find primitive weapon', 'find a sharp rock or club like stick', '+resource')
function card8(){
  updateResources('add', 5);
}
new Card(9, 'Found shelter during storm', 'You find a place to weather to storm', '+ protection')
function card9(){
  updateProtection('add', 5);
}
//++++++++++++++++++
//Net Negative Cards
new Card(10, 'Bear.', 'The local wildlife', '--hp')
function card10(){
  updateHealth('minus', 15);
}
new Card(11, 'Solitude', 'you miss another human being' , '--hope')
function card11(){
  updateHope('minus', 15);
}
new Card(12, 'Banditos', 'Your stash was pilfered', '--resources')
function card12(){
  updateResources('minus', 15);
}
new Card(13, 'Shelter destroyed', '', '--Protection')
function card13(){
  updateProtection('minus', 15);
}
//++++++++++++++++++++++++++++++++++
//Mostly Negative Hybrid Value Cards
new Card(14, 'Food merchant','He is selling apples', '-- resource + hp')
function card14(){
  updateResources('minus', 20);
  updateHealth('add', 10);
}
new Card(15, 'Build fire', 'You prepare for the elements', '--resource +protection')
function card15(){
  updateResources('minus', 15);
  updateProtection('add', 15);
}
new Card(16, 'Bad Water' , '--hope +hp')
function card16(){
  updateHope('minus', 25);
  updateHealth('add', 10);
}
new Card(17, 'Chased fun thing','','--protection +hope')
function card17(){
  updateProtection('minus', 30);
  updateHope('add', 20);
}
new Card(18, 'Find corpse' ,'Ew', '--hope +resources', )
function card18(){
  updateHope('minus', 20);
  updateResources('add', 15);
}
//++++++++++++++++++++++++++++++++++
//Mostly Positive Hybrid Value Cards
new Card(19, 'Exhausting Hunt', 'You spend hours running down a deer', '++nutriton -hp')
function card19(){
  updateResources('add', 25);
  updateResources('minus', 10);
}


//++++++++++++++++++
//Triple Value Cards
new Card(20, 'Clothes merchant', 'He is selling warm clothes', '--- resource + protection +hope')
function card20(){
  resource -= 30;
  protection += 5;
  hope += 5;
}
//++++++++++++++++++
//Random Chance Card
// new Card('Approach stranger', 'make friend or get robbed' , '++ socialization OR -hope -socializtion')

// function approachStranger(){
//     var temp = Math.round(Math.random);
//     if(temp === 1){
//         ++ socializiton
//     }
//     else{ -hope -socializiton}
// }
