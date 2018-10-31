var submitName = document.getElementById('submit');
var nameInput = document.getElementById('nameInput');

function handleSubmit(event) {
  event.preventDefault();
  // localStorage.setItem('submit', JSON.stringify('submit'))
  console.log(nameInput.value);
  localStorage.setItem('nameInput', JSON.stringify(nameInput.value));
}


submitName.addEventListener('click', handleSubmit);
