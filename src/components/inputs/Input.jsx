import { useContext } from "react";
import { TbMapSearch } from "react-icons/tb";
import { Context } from "../../context/ContextProvider.jsx";
function Input() {
  const { setSelectByRegion, setInputText, setShowRegionComponent } =
    useContext(Context);

  return (
    <div className="inputs-component">
      <div className="">
        <label htmlFor="search" className="align-middle">
          <TbMapSearch size={24} />
        </label>
        <input
          id="search"
          className="mx-1 border-2 border-zinc-500  rounded-md p-1"
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => {
            setInputText(e.target.value);
            setShowRegionComponent(false);
          }}
        />
      </div>
      <div>
        <label htmlFor="select">Filter by Region: </label>
        <select
          name="select"
          id="select"
          className="font-semibold"
          onChange={(e) => {
            setSelectByRegion(e.currentTarget.value);
            setShowRegionComponent(true);
          }}
        >
          <option >{"----"}</option>
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
