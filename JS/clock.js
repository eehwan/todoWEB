const _clock = document.querySelector(".clock");

function getTime(){
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  _clock.innerHTML= ((hour <= 9 ? `0${hour}:`:`${hour}:`) +
                    (minute <= 9 ? `0${minute}:`:`${minute}:`) +
                    (second <= 9 ? `0${second}`:`${second}`));
}



function init() {
  getTime();
  setInterval(getTime,1000);
}

init();
