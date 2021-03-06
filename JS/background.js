function select(tag){
  return document.querySelector(tag);
}
// already been declared in other JS
// const _wrapper = select(".wrapper");
const _background = select(".background"),
      _change_img = select("#change_img");

const _page1 = select("#page1"),
      _page2 = select("#page2"),
      _page3 = select("#page3");
const num_of_imgs = 9;


let last_img= 0;
function confirm_num(num_of_imgs){
  let imgNum = Math.floor(Math.random() * num_of_imgs) + 1;
  while (true){
    imgNum = Math.floor(Math.random() * num_of_imgs) + 1;
    if (imgNum!=last_img){
      return imgNum;
    }
  }
}

function paint(target, imgNum){
  _background.style.backgroundImage = `url(img/desktop/${imgNum}.jpg)`;
}

function init(){
  paint(_wrapper, confirm_num(num_of_imgs));
  _change_img.addEventListener('click', function(){
    paint(_wrapper, confirm_num(num_of_imgs));
  })
}

init();
