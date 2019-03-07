import React, { Component } from "react";
import axios from "axios";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      humidity: "",
      pressure: "",
      data: []
    };
  }

componentDidMount() {
    const url =
      "http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=715ec2c6049201373e9978dd3f49718f";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          temp: data.main.temp,
          pressure: data.main.pressure,
          humidity: data.main.humidity
        });
      });
  }

  render() {
    const { temp, humidity, pressure } = this.state;
    console.log(this.state);
    return (
      <div className="weatherData">
        <span>{temp} </span>
        <span>
          This is temp.
          <br />
        </span>
        <span>{pressure} </span>
        <span>
          This is pressure.
          <br />
        </span>
        <span>{humidity} </span>
        <span>
          This is humidity.
          <br />
        </span>
      </div>
    );
  }
}

export default Card;
