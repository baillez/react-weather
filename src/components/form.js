import React, { Component } from "react";

const Form = props => {
  return (
    <form onSubmit={props.loadWeather}>
      <input type="text" name="city" />
      <button>Get weather</button>
    </form>
  );
};

export default Form;
