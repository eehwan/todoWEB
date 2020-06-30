function select(tag){
  return document.querySelector(tag);
}
// already been declared in other JS
// const _wrapper = select(".wrapper");

const _page1 = select("#page1"),
      _page2 = select("#page2"),
      _page3 = select("#page3");
const num_of_imgs = 7;

let nums = [];


function gen_num(num_of_imgs){
  let imgNum = Math.floor(Math.random() * num_of_imgs) + 1;
  while (true){
    imgNum = Math.floor(Math.random() * num_of_imgs) + 1;
    if (!nums.includes(imgNum)){
      return imgNum;
    }
  }
}
function paint(target, imgNum){
  const bg = document.createElement("div");
  bg.classList.add('background');
  bg.style.backgroundImage = `url(img/desktop/${imgNum}.jpg)`;
  target.prepend(bg);
  // const image = new Image();
  // image.src = `img/desktop/${imgNum}.jpg`;
  // image.classList.add('background');
  // target.insertBefore(image, target.firstChild);
  nums.push(imgNum);
}
function init(){
  paint(_wrapper, gen_num(num_of_imgs));
  paint(_wrapper, gen_num(4));
}

init();
