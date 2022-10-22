import React from "react";
import "./WeatherCard.css";

const today = new Date();
const hours = today.getHours();
const minutes =
  today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();

const ForecastCard = ({ data, day }) => {
  return (
    <div className="weather-card d-flex flex-column justify-content-between align-items-center">
      <div className="day d-flex flex-row align-items-center">
        <span>
          <h4 className="day-short">{day}</h4>
          <h4 className="day-long">
            {data.weather[0].description.charAt(0).toUpperCase() +
              data.weather[0].description.slice(1)}
          </h4>
        </span>
        {/* <h5 className="time">
          {hours}:{minutes}
        </h5> */}
      </div>
      <div className="day-data d-flex flex-column align-items-center">
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon mb-4"
        />
        <h1 className="data-item">{Math.round(data.temp.day)}°C</h1>
      </div>
      <div className="details align-items-start flex-column">
        <div className="parameter-row d-flex flex-row justify-content-between w-100">
          <span className="label top">Details</span>
        </div>
        <div className="parameter-row d-flex flex-row justify-content-between w-100">
          <span className="label">Feels like</span>
          <span className="value">{Math.round(data.feels_like.day)}°C</span>
        </div>
        <div className="parameter-row d-flex flex-row justify-content-between w-100">
          <span className="label">Wind</span>
          <span className="value">{data.wind_speed} m/s</span>
        </div>
        <div className="parameter-row d-flex flex-row justify-content-between w-100">
          <span className="label">Humidity</span>
          <span className="value">{data.humidity} %</span>
        </div>
        <div className="parameter-row d-flex flex-row justify-content-between w-100">
          <span className="label">Pressure</span>
          <span className="value">{data.pressure} hPa</span>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
