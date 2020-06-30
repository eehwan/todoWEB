function select(tag){
  return document.querySelector(tag);
}

const _form_todo = select("#form_todo"),
      _input_todo = select("#form_todo input"),
      _todo_list = select("#todo_list");

const LS_todo = "todo";
let toDos = [];
if (localStorage.getItem(LS_todo) != null){
  toDos = JSON.parse(localStorage.getItem(LS_todo));
}

// toDos배열 내부의 object들의 text를 불러와서 make_list함수실행
function load_todo(){
  if (toDos != null ){
    toDos.forEach(function(element){
      make_list(element);
    });
  };
}

// toDos배열에 text를 객체로 추가
function  add_todo(text){
  const todo_object =  {
    text: text,
    id: toDos.length + 1
  };
  toDos.push(todo_object);
}
// 받은 object로 li행을 만들어 기존ul에 추가
function make_list(element){
  const toDo = document.createElement("li");
  toDo.className = "toDo";
  toDo.id = element.id;

  const deleteBtn = document.createElement("i");
  deleteBtn.className = "icon-trash";
  deleteBtn.addEventListener("click", handleDelete);
  const _p = document.createElement("p");
  _p.innerHTML = element.text;
  toDo.appendChild(_p);
  toDo.appendChild(deleteBtn);
  _todo_list.appendChild(toDo);
}
// li 내부에 있는 deleteBtn 클릭시 실행
function handleDelete(event) {
  const target = event.target;
  const li = target.parentElement;
  const ul = li.parentElement;
  ul.removeChild(li);
  toDos = toDos.filter(function(element) {
    return element.id !== parseInt(li.id);
  });
  save_toDos();
}
// toDos 배열을 로컬스토리지에 저장
function save_toDos() {
  localStorage.setItem(LS_todo, JSON.stringify(toDos));
}

// submit시 실행 함수
function submit_todo(event){
  event.preventDefault();
  if (_input_todo.value){
    add_todo(_input_todo.value);
    save_toDos();
    make_list(toDos[toDos.length-1]);
    _input_todo.value = "";
  }
}



function init(){
  load_todo();
  _form_todo.addEventListener("submit", function() {
    submit_todo(event);
  });
}

init();
