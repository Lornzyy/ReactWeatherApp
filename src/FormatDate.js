import React from "react";

export default function FormatDate(props) {
  let date = props.date;

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = days[date.getDay()];

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let formattedDate = `${day} ${hours}:${minutes}`;

  return (
    <>
      <p className="m-0 p-0">
        <strong>
          {" "}
          {formattedDate}
          {hours < 12 ? "AM" : "PM"}
        </strong>
      </p>
    </>
  );
}
