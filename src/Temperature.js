import React, { useState } from "react";

import "./WeatherInfo.css";

export default function Temperature(props) {
  console.log(props.temp.data.temperature);
  const [unit, setUnit] = useState("celcius");

  function displayCelcius(e) {
    e.preventDefault();
    setUnit("celcius");
  }

  function displayFahrenheit(e) {
    e.preventDefault();
    setUnit("fahrenheit");
  }

  let celcius = Math.round(props.temp.data.temperature);
  let fahrenheit = Math.round((celcius * 9) / 5 + 32);

  if (unit === "celcius") {
    return (
      <>
        <p>{celcius} </p>
        <span>
          {" " }°C {" | "}
          <a href="/" onClick={displayFahrenheit}>
            °F
          </a>
        </span>
      </>
    );
  } else {
    return (
      <>
        <p>{fahrenheit} </p>
        <span>
          <a href="/" onClick={displayCelcius}>
            °C
          </a>{" "}
          {" | "}
          °F
        </span>
      </>
    );
  }
}
