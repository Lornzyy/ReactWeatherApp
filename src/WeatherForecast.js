import React, { useState, useEffect } from "react";
import axios from "axios";

import WeatherForecastDaily from "./WeatherForecastDaily";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function displayWeatherForecast(response) {
    // console.log(response.data.daily);
    setLoaded(true);
    setForecast(response.data.daily);
  }

  useEffect(() => {
    setLoaded(false)
  }, [props.forecast])


  function isLoaded() {
    let apiKey = "o63c6afa36060dtb755bc2adb841329a";
    let longitude = props.forecast.longitude;
    let latitude = props.forecast.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

    // https://api.shecodes.io/weather/v1/forecast?lon=10&lat=10&key=o63c6afa36060dtb755bc2adb841329a
    axios.get(apiUrl).then(displayWeatherForecast);
  }

  if (loaded) {
    return (
      <div className="weather-forecast">
        <div className="container weather-forecast-container">
          <h5> {props.forecast.city} Weekly Forecast </h5>
          <div className="row">
            {forecast.map((dailyForecast, index) => {
              if (index < 5) {
                return (
                  <div className="col" key={index}>
                    <WeatherForecastDaily data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    isLoaded();
    return null;
  }
}
