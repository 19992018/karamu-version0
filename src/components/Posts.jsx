import React from "react";
import { useState } from "react";
import PostItem from "./PostItem";
import { DUMMY_POSTS } from "../data";

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="posts">
      {posts.length > 0 ? (
        <div className="container posts__container">
          {/*remember key is compulsory when mapping, we are passing the parameters as props to post item  */}
          {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
            <PostItem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              description={desc}
              authorID={authorID}
            />
          ))}
        </div>
      ) : (
        <h2 className="center">No posts found</h2>
      )}
    </section>
  );
};

export default Posts;
