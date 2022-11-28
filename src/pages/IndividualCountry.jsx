import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../context/ContextProvider.jsx";
import { MainFlag } from "../components/Individual_Country/main_flag/MainFlag.jsx";
import { CommonName } from "../components/Individual_Country/common_name/CommonName.jsx";
import { Links } from "../components/Individual_Country/links/Links.jsx";
import { NativeName } from "../components/Individual_Country/native_name/NativeName.jsx";
import { Capital } from "../components/Individual_Country/capital/Capital.jsx";
import { Currencies } from "../components/Individual_Country/currencies/Currencies.jsx";
import { Demonyms } from "../components/Individual_Country/demonyms/Demonyms.jsx";
import { InPortuguese } from "../components/Individual_Country/em_portugues/InPortuguese.jsx";
import { Languages } from "../components/Individual_Country/country_languages/Languages.jsx";
import { Area } from "../components/Individual_Country/country_area/Area.jsx";
import { Population } from "../components/Individual_Country/country_population/Population.jsx";
import { CountryName } from "../components/Individual_Country/countryName/CountryName";
import { Independent } from "../components/Individual_Country/country_independent/Independent.jsx";
import { UnMember } from "../components/Individual_Country/country_un_member/UnMember.jsx";
import { Region } from "../components/Individual_Country/country_region/Region.jsx";
import { SubRegion } from "../components/Individual_Country/country_sub_region/SubRegion.jsx";
import { Borders } from "../components/Individual_Country/country_borders/Borders.jsx";
import { Island } from "../components/Individual_Country/IsIsland/Island.jsx";
import { CoatOfArms } from "../components/Individual_Country/coat_of_arms/CoatOfArms.jsx";

function IndividualCountry() {
  const { darkMode } = useContext(Context);
  const [country, setCountry] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    getData().then((res) => loadCountry(res));
  }, [slug]);

  const getData = async () => {
    try {
      const { data } = await axios(
        `https://restcountries.com/v3.1/name/${slug.split("-").join(" ")}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const loadCountry = (data) => {
    if (data.length > 1) {
      const filteredCountry = data.filter(
        (country) =>
          country.name.common.toLowerCase() === slug.split("-").join(" ")
      );
      setCountry(filteredCountry[0]);
    } else {
      setCountry(data[0]);
    }
  };
  console.log(country.coatOfArms);
  return (
    <main className="p-2  min-h-screen bg-zinc-200 dark:bg-zinc-800">
      <div
        className="max-w-[80px] dark:shadow-md dark:bg-zinc-700 bg-zinc-100
       border-stone-900 px-2 ml-6 rounded-md shadow-md"
      >
        <Link to="/">
          <div
            className="flex flex-row
           items-center justify-center align-middle
            bg-zinc-50 dark:bg-zinc-700"
          >
            <GoArrowLeft color={darkMode ? "white" : "black"} />
            <div className="font-bold text-zinc-800 dark:text-zinc-100 ">
              Back
            </div>
          </div>
        </Link>
      </div>

      {country && country.name && country.flags && country.languages && (
        //COMPONENT
        <main className="flex flex-col items-center justify-center">
          <CountryName name={country.name.official} />
          <section
            className="flex lg:flex-row md:flex-col 
          sm:flex-col xs:flex-col xxsm:flex-col items-center
          justify-center gap-4 min-w-full mt-4 mx-auto  "
          >
            {/* LEFT COL */}
            <div className="flex flex-col">
              {/* COUNTRY FLAG */}
              <MainFlag flag={country.flags.svg} />
              {/* LINKS */}
              <Links
                googleMaps={country.maps.googleMaps}
                name={country.name.common}
              />
            </div>
            {/* RIGHT COL */}
            <div className="flex flex-col bg-zinc-100 dark:bg-zinc-900 shadow-md text-zinc-800 dark:text-zinc-50 p-4 rounded-md">
              {/* INNER COL */}
              <div className="flex lg:flex-row  xs:flex-col xxsm:flex-col gap-4 ">
                {/* INNER COL LEFT*/}
                <div className="leading-8 max-w-[320px] ">
                  <CommonName name={country.name.common} />
                  <NativeName nativeName={country.name.nativeName} />
                  <Capital capital={country.capital} />
                  <Currencies currencies={country.currencies} />
                  <Demonyms demonyms={country.demonyms.eng.m} />
                  <InPortuguese translation={country.translations.por.common} />
                  <Languages languages={country.languages} />
                  <CoatOfArms coatOfArms={country.coatOfArms.svg} />
                </div>
                {/* INNER COL RIGHT */}
                <div className="leading-8 max-w-[280px] ">
                  <Area area={country.area} />
                  <Independent independent={country.independent} />
                  <UnMember unMember={country.unMember} />
                  <Population population={country.population} />
                  <Region region={country.region} />
                  <SubRegion subRegion={country.subregion} />

                  {country.borders ? (
                    <Borders borders={country.borders} />
                  ) : (
                    <Island />
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </main>
  );
}
export { IndividualCountry };
