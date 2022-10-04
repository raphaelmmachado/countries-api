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
        className="max-w-[80px] border-2
       border-zinc-200 px-2 ml-6 rounded-lg"
      >
        <Link to="/">
          <div className="flex flex-row items-center justify-center align-middle">
            <GoArrowLeft />
            <div>Back</div>
          </div>
        </Link>
      </div>

      {country && country.name && country.flags && country.languages && (
        <section
          className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col xxsm:flex-col items-center
         justify-center gap-4 min-w-full mt-4"
        >
          <figure id="big-flag" className="">
            <img src={country.flags.svg} alt="flag" className="sm:block"/>
          </figure>
          <div className="flex flex-col">
            <h3 className="text-[2.5rem] font-bold mb-4">
              {country.name.common}
            </h3>
            <div className="flex lg:flex-row  xs:flex-col xxsm:flex-col gap-2 ">
              <div className="leading-8 max-w-[320px] ">
                <p>
                  <span className="font-bold">Oficial name:</span>{" "}
                  {country.name.official}
                </p>
                <p>
                  <span className="font-bold">Native name: </span>
                  <em>
                    {Object.values(country.name.nativeName).map(
                      (key) => `${key.common} -`
                    )}
                  </em>
                </p>
                <p>
                  <span className="font-bold">Languages: </span>
                  {Object.values(country.languages).map((key) => `${key} - `)}
                </p>

                <p>
                  <span className="font-bold">Population: </span>{" "}
                  {country.population}
                </p>
                <p>
                  <span className="font-bold">Capital: </span> {country.capital}
                </p>
              </div>
              <div className="leading-8 max-w-[280px] ">
                <p>
                  <span className="font-bold">Currencies: </span>
                  {Object.values(country.currencies).map(
                    (key) => `${key.name} ( ${key.symbol} )`
                  )}
                </p>
                <p>
                  <span className="font-bold">Area: </span>{" "}
                  {`${country.area}km²`}
                </p>
                <p>
                  <span className="font-bold">Border:</span>{" "}
                  {country.borders.join(" ,")}
                </p>
                <p>
                  <span className="font-bold">Independent ?</span>{" "}
                  {country.independent ? "yes" : "no"}
                </p>
                <p>
                <span className="font-bold">UN Member ?</span>{" "}
                {country.unMember ? "yes" : "no"}
                </p>
              </div>
            </div>
            <a href={country.maps.googleMaps} target="_blank">
              {" "}
              <div className="flex flex-row align-middle
               items-center mt-2 border-2 border-zinc-200 rounded-md
               p-2 w-fit">
                <GrMapLocation size={24} />
                <p className="text-lg ml-2">
                  <span className="font-bold text-lg "> Location:</span>{" "}
                  {country.subregion}, {country.region}
                </p>
              </div>
            </a>
          </div>
        </section>
      )}
    </main>
  );
}
export { IndividualCountry };
