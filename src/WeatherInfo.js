import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <>
      <div className="weather-information">
        <h1>{props.data.country}</h1>
        <div className="additional-weather-information">
          <div className="float-left">
            <strong>
              <h6>
                <span>📍</span>
                {!props.data.message ? props.data.city : "City Not found"}
              </h6>
            </strong>

            <FormatDate date={props.data.date} />
          </div>
          <div className="float-left">
            <div>
              <WeatherIcon icon={props.data.icon} size={40} />
              <Temperature temp={props} />
            </div>
            <p>{props.data.description}</p>
          </div>
        </div>
      </div>
      {/* <FormattedDate formatDate={data.date} /> */}

      <div className="weather-information">
        <div>
          <p>💧 Humidity {props.data.humidity}%</p>

          <p>💨 Wind {props.data.wind} km/h</p>
        </div>
      </div>
    </>
  );
}
