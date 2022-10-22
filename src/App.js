import React, { useState } from "react";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import WeatherData from "./Components/WeatherData/WeatherData";
import WorldMap from "./Components/Images/Mercator_projection_Square.JPG";

// Import api variables
import { WEATHER_API_KEY, WEATHER_API_URL, WEATHER_MAP_URL } from "./api";
import Loader from "./Components/Loader/Loader";
import TempChart from "./Components/TempChart/TempChart";

const weatherMapTemp = `${WEATHER_MAP_URL}/temp_new/0/0/0.png?appid=${WEATHER_API_KEY}`;
const weatherMapClouds = `${WEATHER_MAP_URL}/clouds_new/0/0/0.png?appid=${WEATHER_API_KEY}`;

function App() {
  // Data for today
  const [currentWeather, setCurrentWeather] = useState(null);
  // Forecast fro the next 7 days
  const [forecast, setForecast] = useState(null);
  // Map layers hide/unhide
  const [showMapTemp, setShowMapTemp] = useState(true);
  const [showMapClouds, setShowMapClouds] = useState(true);
  // Light/Dark mode handler
  const [lightMode, setLightMode] = useState(false);

  // Linking the data from the Geo location API to the Weather API
  const handleOnSearchChange = (searchData) => {
    // Getting the lat and lon from the data and assinging them to two variables
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        // We are getting the city name from the Geo API so that we can have the country as well, and spreading the responses from the weather api
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  const handleShowMapTemp = () => {
    setShowMapTemp(!showMapTemp);
  };

  const handleShowMapClouds = () => {
    setShowMapClouds(!showMapClouds);
  };

  const handleLightMode = () => {
    setLightMode(true);
  };

  const handleDarkMode = () => {
    setLightMode(false);
  };

  console.log(forecast);

  return (
    <div
      className={`app-container container-fluid d-flex flex-column ${
        lightMode ? "light" : ""
      }`}
    >
      <Navbar
        onSearchChange={handleOnSearchChange}
        data={currentWeather}
        onDarkSwitch={handleDarkMode}
        onLightSwitch={handleLightMode}
        lightMode={lightMode}
      />
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-start align-items-center">
          {forecast ? (
            <WeatherData forecastData={forecast} day="Today" />
          ) : (
            <div className="d-flex flex-row">
              <Loader />
              <Loader />
              <Loader />
              <Loader />
              <Loader />
              <Loader />
              <Loader />
            </div>
          )}
        </div>
        {forecast && <TempChart data={forecast} />}
      </div>
      <div className="d-flex flex-column justify-content-between align-items-start">
        <div className="map-nav d-flex justify-content-between align-items-center">
          <h2 className="map-title">Global Map</h2>
        </div>
        <div className="weather-map-container">
          <div className="weather-map">
            <span className="map-btn-container d-flex justify-content-center align-items-center">
              <button className="map-btn" onClick={handleShowMapTemp}>
                Temperature
              </button>
              <button className="map-btn" onClick={handleShowMapClouds}>
                Clouds
              </button>
            </span>
            <img
              className={showMapTemp ? "temp-map map" : "hidden"}
              src={weatherMapTemp}
            />
            <img
              className={showMapClouds ? "clouds-map map" : "hidden"}
              src={weatherMapClouds}
            />
            <img className="world-map map" src={WorldMap} alt="" />
          </div>
        </div>
        <div className="col-app col me-5"></div>
        <div className="col-app col ms-5"></div>
      </div>
    </div>
  );
}

export default App;
