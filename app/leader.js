var submit = document.getElementById('submit');

var data1 = [];

function Player(name, score){
  this.name = name;
  this.score = score;
  data1.push(this);
}

if(!localStorage.PlayerBoard){
  new Player('Ryan', 5);
  new Player('Paul', 6);
  new Player('Tina', 10);
  new Player('Jean', 11);
  new Player('Billy', 4);
  new Player('Nita', 7);
}

function newElement(type, content, parent){
  var element = document.createElement(type);
  element.textContent = content;
  parent.appendChild(element);
}

function arrSort(arr){
  arr.sort(function(a,b){
    return b[1] - a[1];
  })
  console.log(arr)
  return arr
}

function playerBuild() {
  var players = [];
  for (var i = 0; i < data1.length; i++){
    players.push([data1[i].name, data1[i].score])
  }
  var sortedArray = arrSort(players);
  localStorage.playersFinal = JSON.stringify(sortedArray);
  
}

function pageLoad(){
  if(localStorage.getItem('PlayerBoard') !== null){
    var temp = JSON.parse(localStorage.PlayerBoard)
    for(var i = 0; i < temp.length; i ++){
      new Player(temp[i].name, temp[i].score);
    }
  } 
}

submit.onclick = function(e){
  e.preventDefault();
  var name = document.getElementById('playerName').value;
  var clickData = localStorage.pastClicked;
  clickData = parseInt(clickData)
  new Player(name,clickData);
  console.log(name, clickData);
  playerBuild();
  localStorage.PlayerBoard = JSON.stringify(data1);
  window.location.href = 'leaderboard.html';
}

pageLoad();
