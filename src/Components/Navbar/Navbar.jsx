import React from "react";
import "./Navbar.css";

import {
  BsBellFill,
  BsFillGeoAltFill,
  BsFillGridFill,
  BsMoonFill,
  BsSunFill,
} from "react-icons/bs";
import profilePic from "../Images/img_avatar.png";

import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api";

const Navbar = ({
  onSearchChange,
  data,
  onLightSwitch,
  onDarkSwitch,
  lightMode,
}) => {
  const [search, setSearch] = useState(null);

  // Getting City data from the Geo API after search
  const loadOptions = (inputValue) => {
    return (
      fetch(
        `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
        geoApiOptions
      )
        .then((response) => response.json())

        // We need to get the name of the City, latitude and longitude so that we can link them to the Weather API
        .then((response) => {
          return {
            options: response.data.map((city) => {
              return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.country}`,
              };
            }),
          };
        })
        .catch((err) => console.error(err))
    );
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div className="navbar container-fluid d-flex justify-content-between ">
      <div className="first-container nav-div d-flex justify-content-between">
        {/* <div className="nav-btn nav-item">
          <BsFillGridFill size={25} className="nav-icon" />
        </div>
        <div className="nav-btn nav-item">
          <BsBellFill size={25} className="nav-icon" />
        </div> */}
        <div
          className="nav-location nav-item d-flex justify-content-between ms-5"
          style={{ color: "var(--white-blue)" }}
        >
          <span className="d-flex justify-content-around align-items-center ">
            <BsFillGeoAltFill size={25} />
            {data ? (
              <h4 className="ps-2">{data.city}</h4>
            ) : (
              <h4 className="ps-2"> Search for a location ... </h4>
            )}
          </span>
        </div>
      </div>
      <form className="search-bar nav-div">
        <AsyncPaginate
          placeholder="Search for city"
          debounceTimeout={600}
          value={search}
          onChange={handleOnChange}
          loadOptions={loadOptions}
          className="search"
        />
      </form>
      <div className="last-container nav-div justify-content-between">
        <div className="theme-switch d-flex justify-content-end align-items-center">
          <div className="theme-bar"></div>
          <div
            className={`theme-sun theme-btn nav-btn ${
              lightMode ? "sun-open" : "sun-close"
            }`}
            onClick={onLightSwitch}
          >
            <BsSunFill size={30} style={{ color: "yellow" }} />
          </div>
          <div
            className={`theme-moon theme-btn nav-btn ${
              lightMode ? "moon-close" : "moon-open"
            }`}
            onClick={onDarkSwitch}
          >
            <BsMoonFill size={30} style={{ color: "lightgray" }} />
          </div>
        </div>
        <div className="profile">
          <img src={profilePic} alt="Profile picture" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
