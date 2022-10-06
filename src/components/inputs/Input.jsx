import debounce from 'lodash.debounce';
import { useContext } from "react";
import { TbMapSearch } from "react-icons/tb";
import { Context } from "../../context/ContextProvider.jsx";

function Input() {
  const { setSelectByRegion, setInputText, setShowRegionComponent, darkMode } = useContext(Context);
  return (
    <div className="inputs-component bg-zinc-100 dark:bg-zinc-900 ">
      <div className='bg-zinc-50 dark:bg-zinc-800 rounded-md shadow-md p-2'>
        <label htmlFor="search" className="align-middle">
          <TbMapSearch size={24} color={darkMode ? "white" : "black"}/>
        </label>
        <input
          id="search"
          className="mx-1 border-2 bg-zinc-100 dark:bg-zinc-800
          border-zinc-200 dark:border-zinc-700
          rounded-md p-1"
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => {
            setShowRegionComponent(false);
            const debouncedSave = debounce(()=> setInputText(e.target.value), 1500)
            debouncedSave()
          }}
        />
      </div>
      <div className='shadow-sm  bg-zinc-50 dark:bg-zinc-800 rounded-md p-1 flex items-center'>
        <label htmlFor="select"
        className='text-zinc-800 dark:text-zinc-50
        text-md font-semibold px-1'>
          Filter by Region: </label>
        <select
          name="select"
          id="select"
          className="font-semibold text-zinc-800 dark:text-zinc-50
          bg-zinc-50 dark:bg-zinc-800 border-0"
          onChange={(e) => {
            setSelectByRegion(e.currentTarget.value);
            setShowRegionComponent(true);
          }}
        >
          <option value="All">All</option>
          <option value="Americas">Americas</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}
export { Input };
