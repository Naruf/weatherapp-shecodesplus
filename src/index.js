function changeTemp(response) {
  let temp = Math.round(response.data.temperature.current);
  let newTemp = document.querySelector("#current-temp");
  newTemp.innerHTML = temp;
}
function changeCityName(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let city = cityInput.value.trim().toUpperCase();
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
