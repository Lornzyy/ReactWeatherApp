import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <p>Thu</p>
            <span className="weather-forecast-icon">🌧️</span>
            <p>
              <span className="weather-forecast-temperature-max">19° </span>
              <span className="weather-forecast-temperature-min">10°</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
