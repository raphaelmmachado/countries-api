import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { MdLocationPin } from "react-icons/md";
import { FaWikipediaW } from "react-icons/fa";
import { useState, useEffect } from "react";
import {useContext} from "react"
import {Context} from "../context/ContextProvider.jsx"
function IndividualCountry() {
  const {darkMode} = useContext(Context)
  const [country, setCountry] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios(
        `https://restcountries.com/v3.1/name/${slug.split("-").join(" ")}`
      );
      setCountry(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="p-2 bg-zinc-100 dark:bg-zinc-800 min-h-screen">
      <div
        className="max-w-[80px] dark:shadow-md dark:bg-zinc-700
       border-stone-900 px-2 ml-6 rounded-md"
      >
        <Link to="/">
          <div
            className="flex flex-row
           items-center justify-center align-middle
           shadow-sm"
          >
            <GoArrowLeft color={darkMode ? "white" : "black"}/>
            <div className="font-bold text-zinc-800 dark:text-zinc-100
             ">Back</div>
          </div>
        </Link>
      </div>

      {country && country.name && country.flags && country.languages && (
        //COMPONENT
        <section
          className="flex lg:flex-row md:flex-col 
          sm:flex-col xs:flex-col xxsm:flex-col items-center
          justify-center gap-4 min-w-full mt-4 mx-auto bg-zinc-50 dark:bg-zinc-800"
        >
          {/* LEFT COL */}
          <div className="flex flex-col">
            <figure id="big-flag">
              <img
                src={country.flags.svg}
                alt="flag"
                className="sm:block rounded-sm"
              />
            </figure>
            <div className="flex flex-row items-center align-middle
              justify-between shadow-xl rounded-md p-2 border-1 dark:border-0
              border-zinc-100 dark:border-zinc-800 mt-2"
            >
              <a href={country.maps.googleMaps} target="_blank">
                {" "}
                <div
                  className="flex flex-row align-middle
               items-center w-fit"
                >
                  <MdLocationPin size={24} color="red" className="icon"/>
                  <p className="text-lg ml-2">
                    <span className="text-lg font-semibold text-blue-800 dark:text-blue-600 hover:text-blue-600">
                      Location
                    </span>
                  </p>
                </div>
              </a>
              <a
                className="text-blue-800 ml-2 align-middle "
                href={`https://en.wikipedia.org/wiki/${country.name.common}`}
                target="_blank"
              >
                <div className="flex flex-row w-fit
                items-center align-middle">
                  <FaWikipediaW size={24} color="steelblue"/>
                <span className="text-lg text-blue-800 font-semibold
                 dark:text-blue-600 hover:text-blue-600">ikipedia</span>
                </div>
              </a>
            </div>
          </div>
          {/* RIGHT COL */}
          <div className="flex flex-col shadow-md text-zinc-800 dark:text-zinc-50 p-4 rounded-md">
            <h3 className="text-[2.5rem] font-extrabold mb-4 max-w-[500px]">
              {country.name.official}
            </h3>
            {/* INNER COL */} 
            <div className="flex lg:flex-row  xs:flex-col xxsm:flex-col gap-4 ">
              {/* INNER LEFT COL */}
              <div className="leading-8 max-w-[320px] ">
                <p className="font-semibold">
                  <span className="font-bold">Common name:</span>{" "}
                  {country.name.common}
                </p>

                <p className="font-semibold">
                  <span className="font-bold">Native name: </span>
                  <em>
                    {Object.values(country.name.nativeName).map(
                      (key) => `${key.common}, `
                    )}
                  </em>
                </p>
                <p className="font-semibold">
                  <span className="font-bold">Capital: </span>
                  {Object.values(country.capital).map((keys) => `${keys}, `)}
                </p>
                <p className="font-semibold">
                  <span className="font-bold">Languages: </span>
                  {Object.values(country.languages).map((key) => `${key}, `)}
                </p>
                <p className="font-semibold">
                  <span className="font-bold">Currencies: </span>
                  {Object.values(country.currencies).map(
                    (key) => `${key.name} ( ${key.symbol} )`
                  )}
                </p>
                <p className="font-semibold">
                  <span className="font-bold">Em português: </span>{" "}
                  {country.translations.por.common}
                </p>
                <p className="font-semibold">
                  <span className="font-bold">Demonyms: </span>{" "}
                  {country.demonyms.eng.m}
                </p>
              </div>
            {/* INNER RIGHT COL */}
              <div className="leading-8 max-w-[280px] ">
                <p className="font-semibold">
                  <span className="font-bold">Area: </span>{" "}
                  {`${country.area}km²`}
                </p>
                {country.borders ? (
                  <p className="font-semibold">
                    <span className="font-bold">Border:</span>{" "}
                    {country.borders.join(" ,")}
                  </p>
                ) : (
                  <p>
                    <span className="font-bold">Is an island </span>
                  </p>
                )}
                <p className="font-semibold">
                  <span className="font-bold">Independent?</span>{" "}
                  {country.independent ? "yes" : "no"}
                </p>
                <p className="font-semibold">
                  <span className="font-bold">UN Member?</span>{" "}
                  {country.unMember ? "yes" : "no"}
                </p>
                <p className="font-semibold">
                  <span className="font-bold">Population: </span>{" "}
                  {country.population}
                </p>
                <p className="font-semibold">
                  <span className="font-bold">Region:</span> {country.region}
                </p>
                <p className="font-semibold">
                  <span className="font-bold">Sub-Region:</span>{" "}
                  {country.subregion}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
export { IndividualCountry };
