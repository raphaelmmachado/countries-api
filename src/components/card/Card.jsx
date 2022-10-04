import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
function CardComponent({ name, image, region, capital, population }) {
  const navigate = useNavigate();
  const styles = {
    cardImgStyles: {
      width: "345px",
      height: "180px",
    },
  };
  const slug = name.toLowerCase().split(" ").join("-")
  return (
    <Card
      sx={{ maxWidth: 345, height: 335 }}
      raised={true}
      id="card"
  
      onClick={() => navigate(`/country/${slug}`)}
    >
      <CardMedia
        component="img"
        image={image}
        style={styles.cardImgStyles}
        alt={name}
      />
      <CardContent>
        <Typography variant="h2" component="h2" id="card-title">
          {name}
          {/* {name.length > 25 ? `${name.substring(0, 26)}...` : name} */}
        </Typography>
        <br />
        <Typography variant="body1" component="p">
          Population:
          <strong> {population}</strong>
        </Typography>
        <Typography variant="body1" component="p">
          Region:
          <strong> {region}</strong>
        </Typography>
        <Typography variant="body1" component="p">
          Capital:
          <strong> {capital}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
}
export { CardComponent };
