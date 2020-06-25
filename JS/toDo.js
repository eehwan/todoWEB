function select(tag){
  return document.querySelector(tag);
}
function  addToDo(text){
  var list = document.createElement("li");
  list.innerHTML = (text+"<button class='delete'>X</button>");
  select("#todo_list").append(list);
}

function init(){
  
}

// 실행
// select("#todo_add").addEventListener("click", function(){
//   addToDo("할 일 추가");
// })
