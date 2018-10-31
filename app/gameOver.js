var submitName = document.getElementById('submit');
var nameInput = document.getElementById('nameInput');

function handleSubmit(event) {
  event.preventDefault();
  console.log(nameInput.value);
  localStorage.setItem('nameInput', JSON.stringify(nameInput.value));
}


submitName.addEventListener('click', handleSubmit);

var leaderBoardArray = (localStorage.nameInput
, localStorage.pastClicked);

console.log(leaderBoardArray);

