let body = document.querySelector('.weather')
let form = document.querySelector('.input-form');
let search = document.querySelector('.search');
let degree = document.querySelector('.weather__temp');
let locate = document.querySelector('.weather__name');
let detailisItem = document.querySelector('.detailis__item')
let weatherAnimation = document.querySelector('.weather__animation');
let country = 'tashkent';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  country = search.value;
  getDate();
  
})

getDate();


function getDate() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=aaacdda7d03829ed9bb87a428aa81375`)
  .then(res => res.json())
  .then(data => {
    degree.innerHTML = Math.floor(data.main.temp) - 273;
    locate.innerHTML = `${data.name} | ${data.sys.country}`;
    detailisItem.innerHTML = data.weather[0].main
    console.log(data)
  })
}


if(!detailisItem == "Clouds") {
  body.style.backgroundColor = '#42c2ff';
} 

// if(detailisItem.innerText == "Rain") {
//   weatherAnimation.classList.add('rain');
//   body.classList.add('rainBody')
// }
// if(detailisItem.innerText.includes("Clouds")){
//   body.style.backgroundColor = "#42c2ff";
//   console.log('dfsdfsfdsf');
// }


let btn = document.querySelectorAll('.weather__btn')

btn.forEach((item) => {
  item.addEventListener('click', () => {
    if(item.classList.contains('rain')) {
      weatherAnimation.classList.add('rain');
      body.classList.add('rainBody')
    }
    if(item.classList.contains('snow')) {
      weatherAnimation.classList.add('snow');
      body.classList.add('snowBody')
    }
    if(item.classList.contains('fog')) {
      weatherAnimation.classList.add('fog');
      body.classList.add('fogBody')
    }
    if(item.classList.contains('sunny')) {
      weatherAnimation.classList.add('sunny');
      body.classList.add('sunnybody')
    }
    if(item.classList.contains('thund')) {
      weatherAnimation.classList.add('thund');
      body.classList.add('thundbody')
    }
  })
})


