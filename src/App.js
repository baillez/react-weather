import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card";
import Form from "./components/form";
import Weather from "./components/Weather";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    pressure: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    console.log(city);
    let api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=715ec2c6049201373e9978dd3f49718f`
    );

    const response = await api_call.json();

    this.setState({
      temperature: response.main.temp,
      city: response.name,
      humidity: response.main.humidity,
      pressure: response.main.pressure
    });
    console.log(response);
  };
  render() {
    return (
      <div>
        <Form loadWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          humidity={this.state.city}
          pressure={this.state.pressure}
        />
      </div>
    );
  }
}

export default App;
