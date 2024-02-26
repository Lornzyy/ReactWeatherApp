import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./weather.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeatherData(res) {
    setWeatherData({
      ready: true,
      city: res.data.city,
      coordinates: res.data.coordinates,
      country: res.data.country,
      description: res.data.condition.description,
      icon_url: res.data.condition.icon_url,
      icon: res.data.condition.icon,
      temperature: res.data.temperature.current,
      humidity: res.data.temperature.humidity,
      wind: res.data.wind.speed,
      date: new Date(res.data.time * 1000),
      message: res.messsage,
    });
  }

  function search() {
    let apiKey = "o63c6afa36060dtb755bc2adb841329a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    // https://api.shecodes.io/weather/v1/current?query=Nairobi&key=o63c6afa36060dtb755bc2adb841329a&units=metric`
    // https://shecodes-assets.s3.amazonaws.com/api/weather
    axios.get(apiUrl).then(displayWeatherData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container weather">
        <form className="border rounded" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter the city..."
            className="rounded w-60"
            onChange={handleChange}
          />
          <input
            type="button"
            value="Search"
            className="btn btn-search"
            onClick={handleSubmit}
          />
        </form>
        <hr />

        <WeatherInfo data={weatherData} />
        {/* <FormattedDate formatDate={weatherData.date} /> */}

        <WeatherForecast forecast={weatherData} />
      </div>
    );
  } else {
    search();
    <p>Loading .......</p>;
  }
}
