let weather = {
  "apiKey": "8d4ce9534d0890f4fe7f8075f5257aa3",
  fetchWeather: function () {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Nigeria&appid=8d4ce9534d0890f4fe7f8075f5257aa3"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
};
