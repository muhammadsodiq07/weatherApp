let body = document.querySelector('.weather')
let form = document.querySelector('.input-form');
let search = document.querySelector('.search');
let degree = document.querySelector('.weather__temp');
let locate = document.querySelector('.weather__name');
let detailisItem = document.querySelector('.detailis__item')
let elWindSpeed = document.querySelector(".detailis__span1");
let elHumidity = document.querySelector(".detailis__span2");
let weatherAnimation = document.querySelector('.weather__animation');
let country = 'tashkent';


form.addEventListener('submit', (e) => {
  e.preventDefault();
  country = search.value;
  getDateWeather(country);
  
  search.innerHTML = ""
})

getDateWeather(country);


function getDateWeather(country) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=aaacdda7d03829ed9bb87a428aa81375`)
  .then(res => res.json())
  .then(data => {
    degree.innerHTML = Math.floor(data.main.temp) - 273;
    locate.innerHTML = `${data.name} | ${data.sys.country}`;
    detailisItem.innerHTML = data.weather[0].main;
    elHumidity.innerText = data.main.humidity;
    elWindSpeed.innerHTML = Math.floor(data.wind.speed);
    changeBg(detailisItem.textContent);
  })
}

function changeBg(detailisItem){
  console.log(detailisItem);
  let elWeatherBox = document.querySelector(".weather__animation");
  if(detailisItem == "Clear") {
    elWeatherBox.style.backgroundImage = "url('../weather-animations/clear.gif')";
    body.style.backgroundImage = "url('../weather-animations/clear.gif')";
  } else if(detailisItem == "Clouds"){
    elWeatherBox.style.backgroundImage = "url('../../weather-animations/clouds.gif')";
    body.style.backgroundImage = "url('../../weather-animations/clouds.gif')";
  } else if(detailisItem == "Fog"){
    elWeatherBox.style.backgroundImage = "url('../weather-animations/fog.gif')";
    body.style.backgroundImage = "url('../weather-animations/fog.gif')";
  } else if(detailisItem == "Rain"){
    elWeatherBox.style.backgroundImage = "url('../weather-animations/rain.gif')";
    body.style.backgroundImage = "url('../weather-animations/rain.gif')";
  } else if(detailisItem == "Snow"){
    elWeatherBox.style.backgroundImage = "url('../weather-animations/snow.gif')";
    body.style.backgroundImage = "url('../weather-animations/snow.gif')";
  } else if(detailisItem == "Thunderstorm"){
    elWeatherBox.style.backgroundImage = "url('../weather-animations/thunderstorm.gif')";
    body.style.backgroundImage = "url('../weather-animations/thunderstorm.gif')";
  }
}

let elCountries = document.querySelectorAll(".country");

elCountries.forEach((item) => {
  item.addEventListener("click", () => {
    getDateWeather(item.innerText);
  })
})

let btn = document.querySelectorAll('.weather__btn')

btn.forEach((item) => {
  item.addEventListener('click', () => {
    if(item.classList.contains('rain')) {
      weatherAnimation.style.backgroundImage = "url('../weather-animations/rain.gif')";
      body.style.backgroundImage = "url('../weather-animations/rain.gif')";
    }
    if(item.classList.contains('snow')) {
      weatherAnimation.style.backgroundImage = "url('../weather-animations/snow.gif')";
      body.style.backgroundImage = "url('../weather-animations/snow.gif')";
    }
    if(item.classList.contains('fog')) {
      weatherAnimation.style.backgroundImage = "url('../weather-animations/fog.gif')";
      body.style.backgroundImage = "url('../weather-animations/fog.gif')";
    }
    if(item.classList.contains('sunny')) {
      weatherAnimation.style.backgroundImage = "url('../weather-animations/clear.gif')";
      body.style.backgroundImage = "url('../weather-animations/clear.gif')";  
    }
    if(item.classList.contains('clouds')) {
      weatherAnimation.style.backgroundImage = "url('../../weather-animations/clouds.gif')";
      body.style.backgroundImage = "url('../../weather-animations/clouds.gif')";
    }
    if(item.classList.contains('thund')) {
      weatherAnimation.style.backgroundImage = "url('../weather-animations/thunderstorm.gif')";
      body.style.backgroundImage = "url('../weather-animations/thunderstorm.gif')"; 
    }
  })
})