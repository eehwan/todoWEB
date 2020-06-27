function select(tag){
  return document.querySelector(tag);
}

const _form_todo = select("#form_todo"),
      _input_todo = select("#form_todo input"),
      _todo_list = select("#todo_list");


function  addToDo(text){
  const list = document.createElement("li");
  list.innerHTML = `<p>${text}</p><i class="icon-trash"></i>`;
  _todo_list.append(list);
}
function submit_todo(event){
  event.preventDefault();
  const _inputTodo = _input_todo.value;
  addToDo(_inputTodo);
}



function init(){
  _form_todo.addEventListener("submit", function() {
    submit_todo(event);
  });
}

init();
