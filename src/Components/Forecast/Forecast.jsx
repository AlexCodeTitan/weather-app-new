import React, { useState, useEffect } from "react";
import ForecastCard from "../WeatherCard/ForecastCard";
import "./Forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0),
    dayInAWeek
  );

  return (
    <div className="d-flex flex-row">
      {data.daily.slice(0, 6).map((item, index) => (
        <div key={index}>
          <ForecastCard data={item} day={forecastDays[index]} />
        </div>
      ))}
    </div>
  );
};

export default Forecast;
