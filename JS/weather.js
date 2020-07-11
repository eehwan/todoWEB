function select(tag){
  return document.querySelector(tag);
}

const coords = "coords";
const openWeatherMap_api_Key = "608b9ffa6002fe78ed3a0182ce0b9e75";
const lang= "uk";

const _weather = select("#weather"),
      _place = select("#place");

function load_coords(){
  const loadedCoords = JSON.parse(localStorage.getItem(coords));
  if (loadedCoords==null){
    ask_coords();
  }get_weather(loadedCoords.latitude, loadedCoords.longitude);
}
function ask_coords(){
  navigator.geolocation.getCurrentPosition(handle_geoSuccess, handle_geoError)
}
function handle_geoSuccess(location){
  console.log(location);
  const locationObj ={
    latitude: location.coords.latitude,
    longitude: location.coords.longitude
  }
  localStorage.setItem(coords, JSON.stringify(locationObj));
}
function handle_geoError(){
  alert("Error: can`t load location");
}
function get_weather(lat, long){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${openWeatherMap_api_Key}&units=metric&lang=${lang}`
  ).then(function(response) {
    return response.json()
  }).then(function(json){
    // console.log(json);
    _place.innerHTML = `${json.name}`;
    _weather.innerHTML = `Cloud :&nbsp;${json.clouds.all} &nbsp;&nbsp;&nbsp;<br>TEMP : ${json.main.temp.toFixed(1)} &deg;C<br>feels like : ${json.main.feels_like.toFixed(1)} &deg;C`;
  });
}



function init(){
  load_coords();
}
init();
