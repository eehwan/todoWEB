function select(tag){
  return document.querySelector(tag);
}

const _form_todo = select("#form_todo"),
      _input_todo = select("#form_todo input"),
      _todo_list = select("#todo_list");

const _todoLS = "todo";
const todos = JSON.parse(localStorage.getItem(_todoLS));

function make_list(text){
  const toDo = document.createElement("li");
  toDo.className = "toDo";
  toDo.id = todos.length + 1;
  const deleteBtn = document.createElement("i");
  deleteBtn.className = "icon-trash";
  deleteBtn.addEventListener("click", handleDelete);
  const _p = document.createElement("p");
  _p.innerHTML = text;
  toDo.appendChild(_p);
  toDo.appendChild(deleteBtn);
  _todo_list.appendChild(toDo);
  add_todo();
  save_todo(todos);
}
function handleDelete(event) {
  const target = event.target;
  const li = target.parentElement;
  const ul = li.parentElement;
  const toDoId = li.id;
  ul.removeChild(li);
  todos = todos.filter(function(toDo) {
    return toDo.id !== parseInt(toDoId);
  });
}
function load_todo(){
  if (todos !== null || undefined){
    console.log(todos);
    console.log(todos.length);
    todos.forEach(function(toDo){
      make_list(toDo.text);
    });
  };
}
// todos리스트에 객체 추가
function  add_todo(text){
  const todo_object =  {
    text: text,
    id: todos.length + 1
  };
  todos.push(todo_object);
}
// 로컬스토리지에 저장
function save_todo(text) {
  localStorage.setItem(_todoLS, JSON.stringify(text));
}

function submit_todo(event){
  event.preventDefault();
  const _inputTodo = _input_todo.value;
  add_todo(_inputTodo);
  save_todo(todos);
  load_todo();
}



function init(){
  load_todo();
  _form_todo.addEventListener("submit", function() {
    submit_todo(event);
  });
}

init();
