import React, { useEffect, useState } from "react";
import { usePostsContext } from "../context/PostsContext";
import PostsItem from "./PostsItem";
import { Box } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function PostsList() {
  const { posts, getPosts } = usePostsContext();
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    setTimeout(() => {
      getPosts();
    }, 500);
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <Box>
        <input
          className="inp-search"
          type="search"
          label="Search"
          placeholder="Search"
          onChange={(e) => setSearchVal(e.target.value.toLowerCase())}
        />
      </Box>
      <FormControl sx={{ mb: 3 }}>
        <FormLabel id="demo-radio-buttons-group-label">Authors</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="All"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="All"
            control={<Radio />}
            label="All"
            onChange={(e) => setSearchVal("")}
          />

          <FormControlLabel
            value="Thomas Edison"
            control={<Radio />}
            label="Thomas Edison"
            onChange={(e) => setSearchVal(e.target.value.toLowerCase())}
          />
          <FormControlLabel
            value="Charles Dickens"
            control={<Radio />}
            label="Charles Dickens"
            onChange={(e) => setSearchVal(e.target.value.toLowerCase())}
          />
          <FormControlLabel
            value="Albert Einstein"
            control={<Radio />}
            label="Albert Einstein"
            onChange={(e) => setSearchVal(e.target.value.toLowerCase())}
          />
        </RadioGroup>
      </FormControl>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          rowGap: "20px",
          columnGap: "40px",
        }}
      >
        {posts.length > 0 ? (
          posts
            .filter((item) => {
              return searchVal.toLowerCase() === ""
                ? item
                : item.author.toLowerCase().includes(searchVal);
            })
            .map((item, index) => <PostsItem item={item} key={item.id} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
}

export default PostsList;
