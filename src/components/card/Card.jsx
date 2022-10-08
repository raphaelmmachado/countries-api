import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NumericFormat } from "react-number-format";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../context/ContextProvider.jsx";

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

function CardComponent({
  name,
  image,
  imagepng,
  region,
  capital,
  population,
  portuguese,
}) {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const { setInputText } = useContext(Context);
  const navigate = useNavigate();
  const slug = name.toLowerCase().split(" ").join("-");
  //GET WINDOW WIDTH
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  console.log(windowSize);

  return (
    //card element
    <div
      className="card shadow-2xl rounded-md border-1
    border-zinc-300 dark:border-zinc-900 dark:bg-zinc-800 dark:text-zinc-50"
    >
      {/* component to make lazy loadin */}
      <LazyLoadImage
        src={image}
        placeholderSrc={imagepng}
        effect="blur"
        alt={name}
        className="card-image border-b dark:border-0 border-gray-200  rounded-t-md"
      />
      <div
        className="card-content flex flex-col items-start
       justify-between p-3"
      >
        <div>
          <h2 className="font-extrabold text-2xl">{name}</h2>
        </div>

        <div className="card-content-row font-semibold flex flex-row justify-between w-full">
          {windowSize.innerWidth > 375 && (
            <div className="text-md font-semibold ">
              <p>
                Em português: <span> {portuguese}</span>
              </p>
              <p>
                Population:
                <span>
                  {" "}
                  {
                    <NumericFormat
                      className="bg-zinc-50 dark:bg-zinc-800 max-w-[150px]"
                      type="text"
                      value={population}
                      thousandSeparator="."
                      decimalSeparator=","
                    />
                  }
                </span>
              </p>
              <p>
                Capital:
                <span> {capital}</span>
              </p>
              <p>
                Region:
                <span> {region}</span>
              </p>
            </div>
          )}
          <div
            onClick={() => {
              navigate(`/country/${slug}`);
              setInputText("");
            }}
            className="text-sm hover:cursor-pointer
             text-blue-800 hover:text-blue-600 self-end"
          >
            More details
          </div>
        </div>
      </div>
    </div>
  );
}
export { CardComponent };
