import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function CardComponent({ name,image }) {
  return (
    <Card>
      <CardMedia component="img" image={image} width={270}/>
      <Typography>{name}</Typography>
    </Card>
  );
}
export { CardComponent };
