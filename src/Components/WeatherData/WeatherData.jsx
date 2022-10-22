import React from "react";
import Forecast from "../Forecast/Forecast";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./WeatherData.css";

const WeatherData = ({ forecastData, day }) => {
  return (
    <div className="d-flex flex-row justify-content-between align-items-center mt-5">
      <div className="days-wrapper d-flex">
        <WeatherCard data={forecastData} day={day} />
        <Forecast data={forecastData} />
      </div>
      <div className="graph"></div>
    </div>
  );
};

export default WeatherData;
