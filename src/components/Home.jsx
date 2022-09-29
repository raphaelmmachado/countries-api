import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { CardComponent } from "./Card";
function Home() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const url = "https://restcountries.com/v2/all";
    const res = await axios(url);
    setCountries(res.data);
    console.log(res.data);
  };
  return (
    <main>
      <Box>
        <Grid container spacing={2}>
          {countries &&
            countries.map((country) => {
              return (
                <Grid item key={country.name}>
                  <CardComponent name={country.name} image={country.flag} />
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </main>
  );
}
export { Home };
