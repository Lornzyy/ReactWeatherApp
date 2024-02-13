import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const iconMapping = {
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "light-rain": "RAIN",
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "rain-night": "RAIN",
    "rain-day": "RAIN",
    "scattered-clouds-day": "CLOUDY",
    "scattered-clouds-night": "CLOUDY",
    "broken-clouds-day": "PARTLY_CLOUDY_DAY",
    "broken-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "mist-day": "FOG",
    "mist-night": "FOG",
    "thunderstorm-day": "RAIN",
    "thunderstorm-night": "RAIN"
    
  };
  const defaults = {
    icon: "CLEAR_DAY",
    color: "goldenrod",
    size: 20,
    animate: true,
  };
  return (
    <ReactAnimatedWeather
      icon={iconMapping[props.icon]}
      color={defaults.color}
      size={defaults.size}
    />
  );
}
