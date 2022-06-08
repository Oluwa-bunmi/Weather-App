let weather = {
  "apiKey": "8d4ce9534d0890f4fe7f8075f5257aa3",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => console.log(this.displayWeather(data)));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];

    const { temp, humidity } = data.main;
    const { speed } = data.wind;
  
    document.querySelector(".city").innerHTML = "Weather in " + name;
    document.querySelector(".icon").src =
      "http://openweathermap.org/img/wn/" + icon + ".png"; 
      document.querySelector(".description").innerHTML = description;
      document.querySelector(".temp").innerHTML = temp + "°C";
      document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerHTML = "Wind Speed: " + speed + " km/h";
  
  },
  search: function(){
    this.fetchWeather(document.querySelector("input").value);
  }
};
document.querySelector("button").addEventListener("click", () => {
weather.search();
});
document.querySelector("input").addEventListener("keyup", (event) => {
  if(event.key == "Enter"){
    weather.search();
  }

});
weather.fetchWeather("Nigeria");
