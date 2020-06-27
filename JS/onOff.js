function select(tag){
  return document.querySelector(tag);
}

const _context = select(".context");
const _show_todo = select("#show_todo");
const _todo_add = select("#todo_add");
const _form = select(".context>form");
const _settings = select(".icon-cog-1");
const _checklists = select(".checklists")
const _header = select("header");
const _navi = select("navi")

function hide(selected){
  selected.classList.toggle("hide");
}
function onOff(selected){
  selected.classList.toggle("off")
}

function click_hide(a,b){
  a.addEventListener('click', function(){
    hide(b);
  });
}
function vision(a,b){
  a.addEventListener('mouseover', function(){
    onOff(b);
  });
  a.addEventListener("mouseout", function(){
    onOff(b);
  });
}



function init() {
  click_hide(_show_todo, _context);
  click_hide(_todo_add, _form);
  click_hide(_settings,_checklists);
  vision(_header, _header)
  vision(_navi, _navi)
}

init();
