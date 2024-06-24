import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import "./Station_cards.css";

export default function Stations_card({ nr, kod_poczt, adres, image, nazwa }) {
  return (
    <Card className="stations_cards" sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 360 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nazwa}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {adres} {kod_poczt} {nr}
        </Typography>
        <Typography variant="body2" color="text.secondary"></Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
