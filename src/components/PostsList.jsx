import React, { useEffect } from "react";
import { usePostsContext } from "../context/PostsContext";
import PostsItem from "./PostsItem";

function PostsList() {
  const { posts, getPosts } = usePostsContext();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {posts.map((item, index) => (
          <PostsItem item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default PostsList;
