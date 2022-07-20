import React, { useEffect, useState } from "react";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

export const Country = ({
  data: { name, capital, population, languages, flags },
}) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital.toString()}&appid=${api_key}&units=imperial`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, [capital]);

  console.log('api key is', api_key)
  return (
    <div>
      <h1>{name.common}</h1>
      <p>capital {capital}</p>
      <p>population {population}</p>
      <h4> Spoken Languages</h4>
      <ul>
        {Object.keys(languages).map((key, index) => (
          <li key={index}>{languages[key]}</li>
        ))}
      </ul>
      <img src={flags.png} />
      {Object.keys(weather).length !== 0 && (
        <>
          <h2>Weather in {capital}</h2>
          <p>
            <strong>temperature:</strong> {weather.main["temp"]} Fahrenheit
          </p>
          <img
            src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].description}
          />
          <p>
            <strong>wind:</strong> {weather.wind["speed"]} mph direction{" "}
            {weather.wind["deg"]} degrees
          </p>
        </>
      )}
    </div>
  );
};
