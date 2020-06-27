function select(tag){
  return document.querySelector(tag);
}

const _user = "user",
      _greeting = select("#greeting"),
      _form_user = select("#form_user"),
      _input_user = select("#form_user input");

function greeting(text){
  localStorage.setItem(_user, text);
  _greeting.innerHTML = `Hello, ${text} !`;
}
function handleSubmit(event){
  event.preventDefault();
  const _inputUser = _input_user.value;
  greeting(_inputUser);
}
function loadName() {
  const curent_user = localStorage.getItem(_user);
  if(curent_user === null) {
    _form_user.addEventListener("submit", function(){
      handleSubmit(event);
    });
  } else {
    greeting(curent_user);
  }
}



function init(){
  loadName();
}

init();
