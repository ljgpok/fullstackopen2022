import React, { useState, useEffect } from "react";
import axios from "axios";
import { Country } from "./Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [filterCountries, setFilterCountries] = useState([]);
  const [showCountry, setShowCountry] = useState({});

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  useEffect(() => {
    setShowCountry(
      filterCountries.length === 1 ? { ...filterCountries[0] } : {}
    );
  }, [filterCountries]);

  const searchCountry = (event) => {
    setCountry(event.target.value);
    setFilterCountries(
      countries.filter(
        (country) =>
          country.name.common
            .toLowerCase()
            .search(event.target.value.toLowerCase()) !== -1
      )
    );
  };

  const listCountries = () => {
    return filterCountries.map((country, index) => (
      <div key={index}>
        {filterCountries.length === 1 ? (
          ""
        ) : (
          <div>
            {country.name.common}
            <button onClick={() => setShowCountry(country)}>show</button>
          </div>
        )}
      </div>
    ));
  };

  console.log("all countries are", countries);
  console.log("filtered country ..", filterCountries);
  console.log("country is", country);
  console.log("show country is", showCountry);

  return (
    <div>
      find countries <input value={country} onChange={searchCountry} />
      {filterCountries.length > 10 ? (
        <div>Too many matches, specify another filter</div>
      ) : (
        listCountries()
      )}
      {showCountry.name && <Country data={showCountry} />}
    </div>
  );
}

export default App;
