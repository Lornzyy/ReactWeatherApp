import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./weather.css";
import axios from "axios";

import FormattedDate from "./formattedDate";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    let apiKey = "o63c6afa36060dtb755bc2adb841329a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    // https://api.shecodes.io/weather/v1/current?query=Nairobi&key=o63c6afa36060dtb755bc2adb841329a&units=metric`
    // https://shecodes-assets.s3.amazonaws.com/api/weather
    axios.get(apiUrl).then(handleSubmit);
  }


  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

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
      <div class="weather-information">
        <h1>Kenya</h1>
        <div className="row">
          <div className="col-6">
            <h4>
              <span>📍</span>
              {city}
            </h4>
            <p>
              <span>clouds</span>
              19°C
            </p>
          </div>
          <div className="col-6">
            <h2> 22.48 PM</h2>
            <p>few clouds</p>
          </div>
        </div>
      </div>
      <FormattedDate date="5th February, 2024" />
      <div className="weather-information">
        <div>
          <p>💧 Humidity 68%</p>

          <p>💨 Wind 4.12 km/h</p>
        </div>
      </div>
    </div>
  );
}
