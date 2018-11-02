// var submitName = document.getElementById('submit');
// var nameInput = document.getElementById('nameInput');

// function handleSubmit(event) {
//   event.preventDefault();
//   console.log(nameInput.value);
//   localStorage.setItem('nameInput', JSON.stringify(nameInput.value));
// }


// submitName.addEventListener('click', handleSubmit);


// var leaderBoardArray = (localStorage.nameInput
// , localStorage.pastClicked);

// console.log(leaderBoardArray);

var playersList = document.getElementById("leader_board");

function loadPlayer(){
  var x = JSON.parse(localStorage.playersFinal);
  for (var i = 0; i < x.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = `${x[i]}`;
    playersList.appendChild(liEl);
  }
}

loadPlayer()
