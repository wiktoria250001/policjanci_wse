import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import "./Accidents_card.css";

export default function Accidents_card({
  data_h,
  long,
  lat,
  participan,
  what_happ,
  injures,
  sluzby,
  image,
}) {
  return (
    <Card className="accidents_cards" sx={{ maxWidth: 400 }}>
      <CardMedia sx={{ height: 400 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data_h} {what_happ}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {long} {lat} {participan} {injures} {sluzby}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
