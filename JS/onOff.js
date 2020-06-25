function select(tag){
  return document.querySelector(tag);
}
function onOff(selected){
  selected.classList.toggle("hide");
}

function click_hide(a,b){
  a.addEventListener('click', function(){
    onOff(b);
  });
}

function init() {
  click_hide(select("#show"), select(".center"));
  click_hide(select("#todo_add"), select(".context>form"));
}



init();
