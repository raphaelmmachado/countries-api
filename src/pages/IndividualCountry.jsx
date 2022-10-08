import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { MdLocationPin } from "react-icons/md";
import { FaWikipediaW } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../context/ContextProvider.jsx";
import { NumericFormat } from "react-number-format";

function IndividualCountry() {
  const { darkMode } = useContext(Context);
  const [country, setCountry] = useState([]);
  const [showFlagName,setShowFlagName] = useState(false)
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
            <GoArrowLeft color={darkMode ? "white" : "black"} />
            <div
              className="font-bold text-zinc-800 dark:text-zinc-100
             "
            >
              Back
            </div>
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
            {/* COUNTRY FLAG */}
            <figure id="big-flag">
              <img
                src={country.flags.svg}
                alt="flag"
                className="sm:block rounded-sm"
              />
            </figure>
            {/* LINKS */}
            <div
              className="flex flex-row items-center align-middle
              justify-between shadow-xl rounded-md p-2 border-1 dark:border-0
              border-zinc-100 dark:border-zinc-800 mt-2"
            >
              <a href={country.maps.googleMaps} target="_blank">
                {" "}
                <div
                  className="flex flex-row align-middle
               items-center w-fit"
                >
                  <MdLocationPin size={24} color="red" className="icon" />
                  <p className="text-lg ml-2">
                    <span
                      className="text-lg font-semibold text-blue-800
										dark:text-blue-600 hover:text-blue-600"
                    >
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
                <div
                  className="flex flex-row w-fit
                items-center align-middle"
                >
                  <FaWikipediaW size={24} color="steelblue" />
                  <span
                    className="text-lg text-blue-800 font-semibold
                 dark:text-blue-600 hover:text-blue-600"
                  >
                    ikipedia
                  </span>
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
              {/* INNER COL LEFT*/}
              <div className="leading-8 max-w-[320px] ">
                <p className="font-semibold">
                  <span className="font-bold">Common name:</span>{" "}
                  {country.name.common}
                </p>

                <p className="font-semibold">
                  <span className="font-bold">Native name: </span>
                  <em>
                    {Object.values(country.name.nativeName).map(
                      (key) => `${key.common}`
                    )}
                  </em>
                </p>
                <p className="font-semibold">
                  <span className="font-bold">Capital: </span>
                  {Object.values(country.capital).map((keys) => `${keys} `)}
                </p>
               
                <div className="font-bold">
                  Currencies:{"  "}
                  <div className="font-semibold inline-block">
                    {Object.values(country.currencies).map((key) => (
                      <div>
                        {key.name}{" "}
                        <span className="bg-green-600 p-1 text-sm inline">
                          {key.symbol}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="font-semibold">
                  <span className="font-bold">Demonyms: </span>{" "}
                  {country.demonyms.eng.m}
                </p>
                <p className="font-bold">
                Em português: <span className="font-semibold"> {country.translations.por.common}</span>
              </p>
              <div className="font-bold">
                  Languages:
                  <div className="flex flex-row">
                    {Object.values(country.languages).map((key) => (
                      <div className="px-[1px] mx-1 rounded-sm bg-zinc-300 dark:bg-zinc-500 text-zinc-800">
                        {key}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* INNER COL RIGHT */}
              <div className="leading-8 max-w-[280px] ">
                <p className="font-semibold">
                  <span className="font-bold">Area: </span>{" "}
                  {
                    <NumericFormat
                      value={country.area}
                      type="text"
                      thousandSeparator="."
                      decimalSeparator=","
                      suffix=" km²"
                      className="bg-zinc-100 dark:bg-zinc-800 max-w-[150px]"
                    />
                  }
                </p>
                
                <p className="font-bold">
                  {country.independent ? "independent" : "Not independent"}
                </p>
                <p className="font-bold">
                  {country.unMember ? "UN member" : "not UN member"}
                </p>
                <p className="font-semibold">
                  <span className="font-bold">Population: </span>{" "}
                  {
                    <NumericFormat
                      value={country.population}
                      thousandSeparator="."
                      decimalSeparator=","
                      className="bg-zinc-100 dark:bg-zinc-800 max-w-[150px]"
                    />
                  }
                </p>
                <p className="font-semibold">
                  <span className="font-bold">Region:</span> {country.region}
                </p>
                <p className="font-semibold">
                  <span className="font-bold">Sub-Region:</span>{" "}
                  {country.subregion}
                </p>
                {country.borders ? (
                  <div className="font-bold">
                    Border:
                    <div onMouseEnter={()=> setShowFlagName(true)}
						onMouseLeave={()=> setShowFlagName(false)}
                      className="flex flex-row gap-1 justify-around
                    dark:bg-zinc-800 p-1 rounded-sm shadow-sm"
                    >
                      {country.borders.map((code) => {
                        return (
                          <div className="relative cursor-default" 
						  >
                            {showFlagName && <div className="absolute top-5 text-sm text-blue-500"></div> }
                              <img
                                key={code}
                                width="30px"
                                src={`https://countryflagsapi.com/svg/${code.toLowerCase()}`}
                                alt={`flag of ${code}`}
                              />
							  <div className="text-xs font-light">{code}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <p>
                    <span className="font-bold">Is island</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
export { IndividualCountry };
