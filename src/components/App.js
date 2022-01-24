import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

import "../styles/App.css";

function App(props) {
  const { forecasts, location } = props;

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries forecasts={forecasts} />
      <ForecastDetails forecast={forecasts[0]} />
    </div>
  );
}

App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecast: PropTypes.shape({
    date: PropTypes.number,
    description: PropTypes.string,
    icon: PropTypes.number,
    humidity: PropTypes.number,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
  }).isRequired,
};

export default App;
