import React, { useEffect } from "react";
import { usePostsContext } from "../context/PostsContext";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function DetailsPage() {
  const navigate = useNavigate();
  const { onePost, getOnePost } = usePostsContext();
  const params = useParams();

  useEffect(() => {
    getOnePost(params.id);
  }, []);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          {onePost.author}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {onePost.dateAdded}
        </Typography>
        <Typography variant="body2">{onePost.content}</Typography>
      </CardContent>
      <Button onClick={() => navigate("/")}>back</Button>
    </Card>
  );
}

export default DetailsPage;
