import { MdLocationPin } from "react-icons/md";
import { FaWikipediaW } from "react-icons/fa";
function Links({ googleMaps, name }) {
  return (
    <div
      className="flex flex-row items-center align-middle
justify-between shadow-xl rounded-md p-2 border-1 dark:border-0
border-zinc-50 dark:border-zinc-800 mt-2 bg-zinc-50 dark:bg-zinc-900"
    >
      <a href={googleMaps} target="_blank">
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
        href={`https://en.wikipedia.org/wiki/${name}`}
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
  );
}
export { Links };
