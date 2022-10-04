import axios from "axios";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect, useState, useContext, useMemo } from "react";
import { CardComponent } from "../components/card/Card.jsx";
import { Context } from "../context/ContextProvider.jsx";

function Home() {
  // Contexto
  const { inputText, selectByRegion, showRegionComponent } =
    useContext(Context);
  const [allCountries, setAllCountries] = useState([]);
  const [countryByName, setCountryByName] = useState([]);
  const [countryByRegion, setCountryByRegion] = useState([]);
  const [spinner, setSpinner] = useState(false);
  // ref to use animation
  const [gridRef] = useAutoAnimate();

  useEffect(() => {
    getData();
  }, []);

  //if types on input, run this function
  useEffect(() => {
    filterCountriesByName();
    console.log(allCountries);
  }, [inputText]);

  //filter countries based on user select
  const filterByRegion = useMemo(
    () =>
      [...allCountries].filter((country) => country.region === selectByRegion),
    [selectByRegion]
  );

  useEffect(() => {
    setCountryByRegion(filterByRegion);
  }, [selectByRegion]);

  const getData = async () => {
    setSpinner(true);
    try {
      const url = "https://restcountries.com/v3.1/all";
      const res = await axios(url);
      setAllCountries(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
    setSpinner(false);
  };
  const filterCountriesByName = () => {
    const filtered = [...allCountries].filter((country) =>
      country.name.common.toLowerCase().includes(inputText)
    );
    if (inputText !== "") setCountryByName(filtered);
  };

  return (
    <>
      {" "}
      {showRegionComponent === false ? (
        <main
          ref={gridRef}
          className="grid xl:grid-cols-3
           lg:grid-cols-2 md:grid-cols-2 
           sm:grid-cols-1 place-items-center gap-4 mx-auto
          
           bg-zinc-100"
        >
          {allCountries && !inputText
            ? allCountries.map((country) => {
                return (
                  <CardComponent
                    key={country.name.common}
                    name={country.name.common}
                    image={country.flags.svg}
                    imagepng={country.flags.png}
                    capital={country.capital && country.capital[0]}
                    region={country.region}
                    population={country.population}
                  />
                );
              })
            : countryByName.map((country) => {
                return (
                  <CardComponent
                  key={country.name.common}
                  name={country.name.common}
                  image={country.flags.svg}
                  imagepng={country.flags.png}
                  capital={country.capital && country.capital[0]}
                  region={country.region}
                  population={country.population}
                  />
                );
              })}
        </main>
      ) : (
        <main
          ref={gridRef}
          className="grid xl:grid-cols-3 lg:grid-cols-2
           md:grid-cols-2 sm:grid-cols-1 place-items-center gap-4 mx-auto"
        >
          {countryByRegion.map((country) => {
            return (
              <CardComponent
              key={country.name.common}
              name={country.name.common}
              image={country.flags.svg}
              imagepng={country.flags.png}
              capital={country.capital && country.capital[0]}
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
