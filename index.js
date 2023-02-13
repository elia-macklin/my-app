//Show Temp
function showTemp(response) {
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${response.data.main.temp}`;
}

//Show Location
function showPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiKey = "ebef9ca4a8de66ed586fac628fade056";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric`;
  axios.get(`${apiURL}&appId=${apiKey}`).then(showTemp);
}
function geoLocation(e) {
  e.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
//Search City
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Searching for ${searchInput.value}`;
  let apiKey = "ebef9ca4a8de66ed586fac628fade056";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&unit=metric`;
  axios.get(`${apiURL}&appId=${apiKey}`).then(showTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
let button = document.querySelector("#search-button");
button.addEventListener("click", geoLocation);

//Feature 1
let now = new Date();

let time = document.querySelector("h2");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

h2.innerHTML = `${day} ${month} ${date}, ${hours}:${minutes}, ${year}`;

let months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let month = months[now.getMonth()];
