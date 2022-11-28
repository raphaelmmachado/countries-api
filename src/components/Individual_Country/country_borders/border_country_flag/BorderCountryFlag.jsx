import { useState, useEffect } from "react";
function BorderCountryFlag({ code }) {
  const [borderFlag, setBorderFlag] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadFlag().then((res) => setBorderFlag(res[0].flags.svg));
  }, []);
  const loadFlag = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
      const data = await res.json();
      setLoading(false);
      return data;
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };
  return (
    <>
      {borderFlag ? (
        <>
          <img width="30px" src={borderFlag} alt={`flag of ${code}`} />
          <div className="text-xs font-normal">{code}</div>
        </>
      ) : (
        <div className="font-semibold">{code}</div>
      )}
    </>
  );
}
export { BorderCountryFlag };
