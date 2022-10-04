import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { GrMapLocation } from "react-icons/gr";
import { useState, useEffect } from "react";

function IndividualCountry() {
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
    <main className="p-2">
      <div
        className="max-w-[80px] border
       border-stone-900 px-2 ml-6 rounded-md"
      >
        <Link to="/">
          <div
            className="flex flex-row
           items-center justify-center align-middle
           shadow-sm"
          >
            <GoArrowLeft />
            <div className="font-bold">Back</div>
          </div>
        </Link>
      </div>

      {country && country.name && country.flags && country.languages && (
        <section
          className="flex lg:flex-row md:flex-col
          sm:flex-col xs:flex-col xxsm:flex-col items-center
          justify-center gap-4 min-w-full mt-4 mx-auto"
        >
          <div className="flex flex-col">
            <figure id="big-flag">
              <img
                src={country.flags.svg}
                alt="flag"
                className="sm:block rounded-sm"
              />
            </figure>
            <div
              className="flex flex-row items-center align-middle
             shadow-xl rounded-md p-2 border border-zinc-100"
            >
              <a href={country.maps.googleMaps} target="_blank">
                {" "}
                <div
                  className="flex flex-row align-middle
               items-center w-fit"
                >
                  <GrMapLocation size={24} />
                  <p className="text-lg ml-2">
                    <span className="font-bold text-lg text-blue-500">
                      {" "}
                      Location:
                    </span>{" "}
                    {country.subregion}, {country.region}
                  </p>
                </div>
              </a>
              <a
                className="text-blue-500 ml-2 align-middle "
                href={`https://en.wikipedia.org/wiki/${country.name.common}`}
                target="_blank"
              >
                <strong className="text-lg">Wikipedia</strong>{" "}
              </a>
            </div>
          </div>
          <div className="flex flex-col shadow-md  p-4 rounded-md">
            <h3 className="text-[2.5rem] font-bold mb-4 max-w-[500px]">
              {country.name.official}
            </h3>
            <div className="flex lg:flex-row  xs:flex-col xxsm:flex-col gap-4 ">
              <div className="leading-8 max-w-[320px] ">
                <p>
                  <span className="font-bold">Common name:</span>{" "}
                  {country.name.common}
                </p>

                <p>
                  <span className="font-bold">Native name: </span>
                  <em>
                    {Object.values(country.name.nativeName).map(
                      (key) => `${key.common}, `
                    )}
                  </em>
                </p>
                <p>
                  <span className="font-bold">Capital: </span>
                  {Object.values(country.capital).map((keys) => `${keys}, `)}
                </p>
                <p>
                  <span className="font-bold">Languages: </span>
                  {Object.values(country.languages).map((key) => `${key}, `)}
                </p>
                <p>
                  <span className="font-bold">Currencies: </span>
                  {Object.values(country.currencies).map(
                    (key) => `${key.name} ( ${key.symbol} )`
                  )}
                </p>
                <p>
                  <span className="font-bold">Em português: </span>{" "}
                  {country.translations.por.common}
                </p>
                <p>
                  <span className="font-bold">Demonyms: </span>{" "}
                  {country.demonyms.eng.m}
                </p>
              </div>
              <div className="leading-8 max-w-[280px] ">
                <p>
                  <span className="font-bold">Area: </span>{" "}
                  {`${country.area}km²`}
                </p>
                {country.borders ? (
                  <p>
                    <span className="font-bold">Border:</span>{" "}
                    {country.borders.join(" ,")}
                  </p>
                ) : (
                  <p>
                    <span className="font-bold">Is an island </span>
                  </p>
                )}
                <p>
                  <span className="font-bold">Independent?</span>{" "}
                  {country.independent ? "yes" : "no"}
                </p>
                <p>
                  <span className="font-bold">UN Member?</span>{" "}
                  {country.unMember ? "yes" : "no"}
                </p>
                <p>
                  <span className="font-bold">Population: </span>{" "}
                  {country.population}
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
