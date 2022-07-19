import React from "react";

export const Country = ({
  data: { name, capital, population, languages, flags },
}) => {
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
      <img src={flags.png}/>
    </div>
  );
};
