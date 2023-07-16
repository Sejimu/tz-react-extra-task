import React, { createContext, useContext, useState } from "react";
import { API } from "../utils/consts";
import axios from "axios";

const postsContext = createContext();

export function usePostsContext() {
  return useContext(postsContext);
}

function PostsContext({ children }) {
  const [posts, setPosts] = useState([]);
  const [onePost, setOnePost] = useState({});

  async function getPosts() {
    const { data } = await axios.get(API);
    setPosts(data);
  }

  async function getOnePost(id) {
    const { data } = await axios(`${API}/${id}`);
    setOnePost(data);
  }

  const value = {
    posts,
    getPosts,
    onePost,
    getOnePost,
  };

  return (
    <postsContext.Provider value={value}>{children}</postsContext.Provider>
  );
}

export default PostsContext;
