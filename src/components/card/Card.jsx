import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

function CardComponent({ name, image, region, capital, population }) {
  const styles = {
    cardImgStyles: {
      width: "345px",
      height: "180px",
    },
  };

  return (
    <Card sx={{ width: 345, height: 335}} raised={true}>
      <CardMedia
        component="img"
        image={image}
        style={styles.cardImgStyles}
        alt={name}
      />
      <CardContent>
        <Typography
          variant="h2"
          component="div"
          style={{ fontSize: "135%", fontWeight: "bold" }}
        >
          {name.length > 25 ? `${name.substring(0, 26)}...` : name}
        </Typography>
        <br />
        <Typography variant="body1">
          Population:
          <strong> {population}</strong>
        </Typography>
        <Typography variant="body1">
          Region:
          <strong> {region}</strong>
        </Typography>
        <Typography variant="body1">
          Capital:
          <strong> {capital}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
}
export { CardComponent };
