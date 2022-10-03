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
          <TbMapSearch size={20} />
        </label>
        <input
          id="search"
          className="mx-1 border-2 rounded-md"
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => {
            setInputText(e.target.value);
            setShowRegionComponent(false)
          }}
        />
      </div>
      <select
        name="select"
        id="select"
        className="font-semibold"
        onChange={(e) => {
          setSelectByRegion(e.currentTarget.value);
          setShowRegionComponent(true);
        }}
      >
        <option defaultValue="all">All regions</option>
        <option value="Americas">Americas</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
export { Input };
