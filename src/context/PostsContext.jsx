import React, { createContext, useContext, useState } from "react";
import { API } from "../utils/consts";
import axios from "axios";

const postsContext = createContext();

export function usePostsContext() {
  return useContext(postsContext);
}

function PostsContext({ children }) {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const { data } = await axios.get(API);
    setPosts(data);
  }

  const value = {
    posts,
    getPosts,
  };

  return (
    <postsContext.Provider value={value}>{children}</postsContext.Provider>
  );
}

export default PostsContext;
