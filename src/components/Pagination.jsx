import React, { useEffect } from "react";
import { usePostsContext } from "../context/PostsContext";

function Pagination() {
  const { dataLength, postsPerPage, setCurrentPage, currentPage, getPosts } =
    usePostsContext();
  useEffect(() => {
    getPosts();
  }, []);
  const totalPosts = dataLength;
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  console.log(currentPage);

  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button key={index} onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
