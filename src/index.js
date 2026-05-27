function changeTemp(response) {
  let temp = Math.round(response.data.temperature.current);
  let newTemp = document.querySelector("#current-temp");
  newTemp.innerHTML = temp;
  let description = response.data.condition.description;
  let newDescription = document.querySelector("#description");
  newDescription.innerHTML = description;
  let humidity = response.data.temperature.humidity;
  let newHumidity = document.querySelector("#current-humidity");
  newHumidity.innerHTML = `<strong>${humidity}%</strong>`;
  let windSpeed = Math.round(response.data.wind.speed);
  console.log(windSpeed);
  let newWindSpeed = document.querySelector("#current-wind");
  newWindSpeed.innerHTML = `<strong>${windSpeed} km/h</strong>`;
  // let weatherIcon = response.data.condition.icon_url;
  // let newWeatheIcon = document.querySelector("#weather-icon");
  // newWeatheIcon.innerHTML = `<img src="${weatherIcon}" alt="icon" />`;
}
function changeCityName(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let cityTrimmed = cityInput.value.trim();
  let city = cityTrimmed
    .toLowerCase()
    .split(" ")
    .filter((word) => word !== "") // removes extra spaces between words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  let cityNew = document.querySelector("h1");
  cityNew.innerHTML = city;
  let apiKey = "5d1t76143df0603191aa4604b0b5b1oe";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(url).then(changeTemp);
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", changeCityName);

function dayTime() {
  let now = new Date();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = weekdays[now.getDay()];
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let timeStamp = document.querySelector("#timeStamp");
  timeStamp.innerHTML = `${weekday} ${hour}:${minutes}`;
}
dayTime();
