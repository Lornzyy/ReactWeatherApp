import React from "react";

import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDaily(props) {
  function day() {
    let date = new Date(props.data.time * 1000);

    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayOfTheWeek = days[day];

    return dayOfTheWeek;
  }

  return (
    <>
      <em>
        <h6>{day()}</h6>
      </em>
      <WeatherIcon  icon={props.data.condition.icon} size={32}/>

      <p>
        <span className="weather-forecast-temperature-max">
          {Math.round(props.data.temperature.maximum)}°{" "}
        </span>
        <span className="weather-forecast-temperature-min">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </p>
    </>
  );
}
