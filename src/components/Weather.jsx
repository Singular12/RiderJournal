import React, { useState } from "react";
// import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "your-api-key-here";

  const getWeatherData = async (zipCode) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3></h3>
      <div className="weather-input">
        <input
          type="text"
          placeholder="Enter zip code"
          onChange={(e) => getWeatherData(e.target.value)}
        />
        {weatherData && (
          <div className="weather-info">
            <img
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt="Weather Icon"
            />
            <h2>{weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp}</p>
            <p>Weather: {weatherData.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
