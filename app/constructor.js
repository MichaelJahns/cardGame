var allCards =[];
function cardCreate(name,storyline, description){
  this.name = name;
  this.storyline = storyline;
  this.description = description;

  allCards.push(this);
}

//++++++++++++++
//Nightmare Card
new cardCreate('Meet Death', 'You are strong child, but I am beyond strength ', 'all survival stats set to zero' );

new cardCreate('Get Robbed', '', 'Drop to 1 resources');

new cardCreate('find/witness bad thing' ,'', 'Drop to 1 hope');

new cardCreate('Lose shelter','', 'Drop to 1 protection')

new cardCreate('Get mauled','', 'Drop to 1 hp')
//++++++++++++++++++
//Net Positive Cards
new cardCreate('Signs of Society' , 'You see signs of soceity', '+hope');

new cardCreate('Good night Sleep', 'You slept well despite your pains', '+health')

new cardCreate('find primitive weapon', 'find a sharp rock or club like stick', '+resource')

new cardCreate('Found shelter during storm', 'You find a place to weather to storm', '+ protection')
//++++++++++++++++++
//Net Negative Cards
new cardCreate('Bear.', 'The local wildlife', '--hp')

new cardCreate('Solitude', 'you miss another human being' , '--hope')


new cardCreate('Banditos', 'Your stash was pilfered', '--resources')

new cardCreate('Shelter destroyed', '', '--Protection')
//++++++++++++++++++++++++++++++++++
//Mostly Negative Hybrid Value Cards
new cardCreate('Meet merchant','He is selling apples', '-- resource + hp')

new cardCreate('Build fire', 'You prepare for the elements', '--resource +protection')

new cardCreate('Bad Water ','--hope +hp')

new cardCreate('Chased fun thing','','--protection +hope')

new cardCreate('Find corpse' ,'Ew', '--hope +resources')

//++++++++++++++++++++++++++++++++++
//Mostly Positive Hybrid Value Cards
new cardCreate('Exhausting Hunt', 'You spend hours running down a deer', '++nutriton -hp')


//++++++++++++++++++
//Triple Value Cards
new cardCreate('Meet merchant', 'He is selling warm clothes', '--- resource + protection +hope')


//++++++++++++++++++
//Random Chance Card
// new cardCreate('Approach stranger', 'make friend or get robbed' , '++ socialization OR -hope -socializtion')

// function approachStranger(){
//     var temp = Math.round(Math.random);
//     if(temp === 1){
//         ++ socializiton
//     }
//     else{ -hope -socializiton}
// }