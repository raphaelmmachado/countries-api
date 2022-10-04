import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
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
    <main>
      <Link to="/">
        <div className="max-w-[80px] border-2 border-zinc-200 p-2 ml-4 rounded-lg  flex flex-row items-center">
          <GoArrowLeft />
          <div>Voltar</div>
        </div>
      </Link>

      {country && country.name && country.flags && country.languages && (
        <section className="flex flex-row items-center justify-center gap-4 min-w-full">
          <figure id="big-flag" className="">
            <img src={country.flags.svg} alt="flag" />
          </figure>
          <div className="flex flex-col">
            <h3 className="font-bold">{country.name.common}</h3>
            <div className="flex flex-row">
              <div>
                <p>
                  Oficial name: <em>{country.name.official}</em>
                </p>
                <p>Languages: {Object.values(country.languages).map((key)=> `${key} | `)}</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
export { IndividualCountry };
