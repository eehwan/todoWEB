function select(tag){
  return document.querySelector(tag);
}
const _wrapper = select(".wrapper");
const _context = select(".context");
const _show_todo = select("#show_todo");
const _todo_add = select("#todo_add");
const _form = select(".context>form");
const __sett_icon = select(".icon-cog-1");
const _settings = select(".settings")
const _header = select("header");

function hide(selected){
  selected.classList.toggle("hide");
}
function off(selected){
  selected.classList.add("off");
}
function on(selected){
  selected.classList.remove("off");
}
function goUp(selected){
  selected.classList.add("goUp");
}
function goDown(selected){
  selected.classList.remove("goUp");
}

// click events
function switch_hide(a,b){
  a.addEventListener('click', function(){
    hide(b);
  });
}
// hover Events
function make_visible(a,b){
  a.addEventListener('mouseover', function(){
    on(b);
  });
}
function make_invisible(a,b){
  a.addEventListener('mouseout', function(){
    off(b);
  });
}

// let last_known_scroll_position = 0;
// let ticking = false;
// function react_scroll(target){
//   console.log("scroll?")
//   _wrapper.addEventListener('scroll', function(e) {
//     current_scroll_position = window.scrollY;
//     if (current_scroll_position != last_known_scroll_position) {
//       window.requestAnimationFrame(function() {
//         goDown(target);
//         console.log("moved")
//       });
//       last_known_scroll_position = current_scroll_position;
//       goUp(target);
//     }
//   });
// }



function init() {
  switch_hide(_show_todo, _context);
  switch_hide(__sett_icon,_settings);
  // react_scroll(_header);
  make_invisible(_header, _header);
  make_visible(_header, _header);

  setTimeout(function(){
    off(_header);
  }, 4000);
}

init();
