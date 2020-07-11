function select(tag) {
  return document.querySelector(tag);
}

const weather_reset_time = 1000*60*15;

const coords = "coords";
const openWeatherMap_api_Key = "608b9ffa6002fe78ed3a0182ce0b9e75";
const lang = "uk";

const _weather = select("#weather"),
  _place = select("#place");

function load_coords() {
  let loadedCoords = JSON.parse(localStorage.getItem(coords));
  if (loadedCoords) {
    get_weather(loadedCoords);
  } else {
    ask_coords();
  }
}

function ask_coords(){
  navigator.geolocation.getCurrentPosition(handle_geoSuccess, handle_geoError)
}

function handle_geoSuccess(location){
  const locationObj = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude
  }
  localStorage.setItem(coords, JSON.stringify(locationObj));
  get_weather(locationObj);
}

function handle_geoError() {
  alert("Error: can`t load location");
}

function get_weather(loadedCoords) {
  const lat = loadedCoords.latitude,
        long = loadedCoords.longitude;
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${openWeatherMap_api_Key}&units=metric&lang=${lang}`).then(function(response) {
    return response.json()
  }).then(function(json) {
    _place.innerHTML = `${json.name}`;
    _weather.innerHTML = `Cloud :&nbsp;${json.clouds.all} &nbsp;&nbsp;&nbsp;<br>TEMP : ${json.main.temp.toFixed(1)} &deg;C<br>feels like : ${json.main.feels_like.toFixed(1)} &deg;C`;
  });
}

function init(){
  load_coords();
  setInterval(()=>load_coords(),weather_reset_time);
}
init();
