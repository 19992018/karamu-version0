import React from "react";
import { useState } from "react";
import Thumbnail1 from "../images/catering.jpg";
import Thumbnail2 from "../images/invitation.jpg";
import Thumbnail3 from "../images/locations.jpg";
import Thumbnail4 from "../images/decor.jpg";
import PostItem from "./PostItem";

const DUMMY_POSTS = [
  {
    id: "1",
    thumbnail: Thumbnail1,
    category: "catering",
    title: "Popular event caterers",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolorum est ratione alias inventore sed, blanditiis suscipit facilis quis quas, molestiae totam quibusdam Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    authorID: 3,
  },
  {
    id: "2",
    thumbnail: Thumbnail2,
    category: "weddings",
    title: "Creative wedding invitations",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolorum est ratione alias inventore sed, blanditiis suscipit facilis quis quas, molestiae totam quibusdam Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    authorID: 1,
  },
  {
    id: "3",
    thumbnail: Thumbnail3,
    category: "locations",
    title: "Nairobi Hosting Locations",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolorum est ratione alias inventore sed, blanditiis suscipit facilis quis quas, molestiae totam quibusdam Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    authorID: 13,
  },
  {
    id: "4",
    thumbnail: Thumbnail4,
    category: "birthdays",
    title: "This is the title of the very last post on this blog.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolorum est ratione alias inventore sed, blanditiis suscipit facilis quis quas, molestiae totam quibusdam Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    authorID: 11,
  },
];

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="posts">
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
    </section>
  );
};

export default Posts;
