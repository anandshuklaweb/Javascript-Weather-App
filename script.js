const API_KEY = `0e23ea1e503a139297bceeb3b95a36f2`;

// const API_URL = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API key}&units=metric`;

// const IMAGE_URL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

const inputForm = document.getElementById("form");
const weatherBox = document.getElementById("weather");
const searchBox = document.getElementById("search");

const getWeatherData = async (city) => {
  weatherBox.innerHTML = `<h2> Loading... <h2>`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return showWeatherData(data);
};

const showWeatherData = (data) => {
  if (data.cod == "404") {
    weather.innerHTML = `<h2> City Not Found <h2>`;
    return;
  }

  weatherBox.innerHTML = `
    <hr>
    <div class="content-section">
        <div class="row">
            <div class="col-md-4">
                <h2>${data.name}</h2>
                <h4>${data.sys.country}</h4>
            </div>

            <div class="col-md-4 text-center">
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="image" srcset="" />
            </div>

            <div class="col-md-4 text-right">
                <h2>${data.main.temp} °C</h2>
                <h4>${data.weather[0].main}</h4>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col-md-6">
                <h4> <span> Min : </span>  ${data.main.temp_min} °C</h4>
            </div>

            <div class="col-md-6 text-right">
            <h4> <span> Max : </span> ${data.main.temp_max} °C</h4>
            </div>
        </div>
    </div>
    
    `;
};

inputForm.addEventListener("submit", function (e) {
  e.preventDefault();
  getWeatherData(search.value);
});
