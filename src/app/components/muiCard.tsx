import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function ImgMediaCard() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        // image="/static/images/cards/contemplative-reptile.jpg"
        image="https://t4.ftcdn.net/jpg/03/96/98/33/360_F_396983381_AcuGFHQbNn7D9eercXFpOecN7d7B5F66.jpg"
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            DevOps
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            TechCorps
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          We are seeking an experienced and passionate DevOps Engineer to help
          us build and maintain scalable, efficient, and reliable infrastructure
          for our applications.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <Button size="small">Apply</Button>
      </CardActions>
    </Card>
  );
}
