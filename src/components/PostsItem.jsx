import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import CommentModal from "./CommentModal";

function PostsItem({ item }) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: 345,
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        onClick={() => navigate(`/details/${item.id}`)}
        image="https://avatars.mds.yandex.net/i?id=9b77d89735603e3b3506d334a9222eb7e3b5e089-8356639-images-thumbs&n=13"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.author}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ width: "176px" }}
        >
          {item.content}
        </Typography>
      </CardContent>
      <CardActions>
        <CommentModal item={item} />

        <Button size="small" onClick={() => navigate(`/details/${item.id}`)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default PostsItem;
