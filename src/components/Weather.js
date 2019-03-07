import React, { Component } from "react";

const Weather = props => {
  return (
    <div>
          City : {props.city}, Temperature : {props.temperature}, Pressure :
      {props.pressure}, Humidity : {props.humidity}
    </div>
  );
};

export default Weather;
