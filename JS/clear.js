function select(tag){
  return document.querySelector(tag);
}

const _clear_all = select("#clear_all"),
      _clear_todos = select("#clear_todos"),
      _clear_name = select("#clear_name");

// already exist
// const LS_todo = "todo";
const LS_name ="user";


function handle_clear(target){
  localStorage.removeItem(target);
  location.reload();
}
function handle_clearAll(){
  localStorage.clear();
  location.reload();
}

function init() {
  _clear_all.addEventListener('click',function(){
    handle_clearAll();
  });
  _clear_name.addEventListener('click',function(){
    handle_clear(LS_name);
  });
  _clear_todos.addEventListener('click',function(){
    handle_clear(LS_todo);
  });
}

init();
