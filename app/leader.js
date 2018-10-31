// var storageData = JSON.parse(localStorage.endGameStats)
// storageData.clicks


var submit = document.getElementById('submit');

var data1 = [];

function Player(name, score){
  this.name = name;
  this.score = score;
  data1.push(this);
}

new Player('Ryan', 5);
new Player('Paul', 6);
new Player('Tina', 10);
new Player('Jean', 11);
new Player('Billy', 4);
new Player('Nita', 7);

submit.onclick = function(e){
  e.preventDefault();
  var name = document.getElementById('playerName').value;
  var clickData = localStorage.pastClicked;
  new Player(name,clickData);
  console.log(name, clickData)
  localStorage.PlayerBoard = JSON.stringify(data1);
}


