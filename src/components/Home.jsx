import axios from "axios";
import { useEffect, useState, useContext, useMemo } from "react";
import { CardComponent } from "./card/Card.jsx";
import { Context } from "../context/ContextProvider.jsx";

function Home() {
  const { inputText, selectByRegion, showRegionComponent } =
    useContext(Context);
  const [allCountries, setAllCountries] = useState([]);
  const [countryByName, setCountryByName] = useState([]);
  const [countryByRegion, setCountryByRegion] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    filterCountriesByName();
    console.log(allCountries);
  }, [inputText]);

  const filterByRegion = useMemo(() =>
    [...allCountries].filter((country) => country.region === selectByRegion)
  );
  useEffect(() => {
    setCountryByRegion(filterByRegion);
  }, [selectByRegion]);

  const getData = async () => {
    const url = "https://restcountries.com/v2/all";
    const res = await axios(url);
    setAllCountries(res.data);
    console.log(res.data);
  };
  const filterCountriesByName = () => {
    const filtered = [...allCountries].filter(
      (country) =>
        country.name.toLowerCase().includes(inputText) ||
        country.nativeName.toLowerCase().includes(inputText)
    );
    if (inputText !== "") setCountryByName(filtered);
  };
  return (
    <>
      {showRegionComponent === false ? (
        <main className="grid grid-cols-3 place-items-center gap-4 mx-4">
          {allCountries && !inputText
            ? allCountries.map((country) => {
                return (
                  <CardComponent
                    name={country.name}
                    image={country.flag}
                    capital={country.capital}
                    region={country.region}
                    population={country.population}
                  />
                );
              })
            : countryByName.map((country) => {
                return (
                  <CardComponent
                    name={country.name}
                    image={country.flag}
                    capital={country.capital}
                    region={country.region}
                    population={country.population}
                  />
                );
              })}
        </main>
      ) : (
        <main className="grid grid-cols-3 place-items-center gap-4 mx-4">
          {countryByRegion.map((country) => {
            return (
              <CardComponent
                name={country.name}
                image={country.flag}
                capital={country.capital}
                region={country.region}
                population={country.population}
              />
            );
          })}
        </main>
      )}
    </>
  );
}
export { Home };
