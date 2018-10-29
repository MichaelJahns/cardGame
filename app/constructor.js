
function Card(id, name,storyline, description){
  this.id = id;  
  this.name = name;
  this.storyline = storyline;
  this.description = description;

  Card.allCards.push(this);
}
Card.allCards = [];
Card.cardDeck = [];
//++++++++++++++
//Nightmare Card
new Card(1, 'Meet Death', 'You are strong child, but I am beyond strength ', 'all survival stats set to zero' );

new Card(2, 'Get Robbed', '', 'Drop to 1 resources');

new Card(3, 'find/witness bad thing' ,'', 'Drop to 1 hope');

new Card(4, 'Lose shelter','', 'Drop to 1 protection')

new Card(5, 'Get mauled','', 'Drop to 1 hp')
//++++++++++++++++++
//Net Positive Cards
new Card(6, 'Signs of Society' , 'You see signs of soceity', '+hope');

new Card(7, 'Good night Sleep', 'You slept well despite your pains', '+health')

new Card(8, 'find primitive weapon', 'find a sharp rock or club like stick', '+resource')

new Card(9, 'Found shelter during storm', 'You find a place to weather to storm', '+ protection')
//++++++++++++++++++
//Net Negative Cards
new Card(10, 'Bear.', 'The local wildlife', '--hp')

new Card(11, 'Solitude', 'you miss another human being' , '--hope')

new Card(12, 'Banditos', 'Your stash was pilfered', '--resources')

new Card(13, 'Shelter destroyed', '', '--Protection')
//++++++++++++++++++++++++++++++++++
//Mostly Negative Hybrid Value Cards
new Card(14, 'Meet merchant','He is selling apples', '-- resource + hp')

new Card(15, 'Build fire', 'You prepare for the elements', '--resource +protection')

new Card(16, 'Bad Water ','--hope +hp')

new Card(17, 'Chased fun thing','','--protection +hope')

new Card(18, 'Find corpse' ,'Ew', '--hope +resources')

//++++++++++++++++++++++++++++++++++
//Mostly Positive Hybrid Value Cards
new Card(19, 'Exhausting Hunt', 'You spend hours running down a deer', '++nutriton -hp')


//++++++++++++++++++
//Triple Value Cards
new Card(20, 'Meet merchant', 'He is selling warm clothes', '--- resource + protection +hope')


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