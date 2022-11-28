import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BorderCountryFlag } from "./border_country_flag/BorderCountryFlag";

function Borders({ borders }) {
  const navigate = useNavigate();

  const borderCountries = async (code) => {
    try {
      const { data } = await axios(
        `https://restcountries.com/v3.1/alpha/${code}`
      );
      const slug = data[0].name.common.toLowerCase().split(" ").join("-");
      navigate(`/country/${slug}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="font-bold">Border</div>
      <div className="grid grid-cols-4 gap-4 dark:bg-zinc-900 p-1 rounded-sm shadow-sm ">
        {borders.map((code, index) => {
          return (
            <div
              key={`${index}${code}`}
              className="relative cursor-pointer"
              onClick={() => borderCountries(code)}
            >
              <div className="absolute top-5 text-sm text-blue-500"></div>
              <BorderCountryFlag code={code} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export { Borders };
