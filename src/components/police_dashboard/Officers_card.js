import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import "./Officers_card.css";

export default function Officers_card({
  stopien,
  imie,
  nazwisko,
  image,
  pesel,
}) {
  return (
    <Card className="officers_cards" sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 360 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {stopien} {imie} {nazwisko}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pesel}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
