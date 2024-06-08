import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar1 from "../images/avatar-1.jpg";
import Avatar2 from "../images/avatar-2.jpg";
import Avatar3 from "../images/avatar-3.jpg";
import Avatar4 from "../images/avatar-4.jpg";
import Avatar5 from "../images/avatar-5.jpg";

const authorsData = [
  { id: 1, avatar: Avatar1, name: "Picnics by Njoki", posts: 3 },
  { id: 2, avatar: Avatar2, name: "Dash and Gifts", posts: 5 },
  { id: 3, avatar: Avatar3, name: "Sayari Parties", posts: 1 },
  { id: 4, avatar: Avatar4, name: "Karamu", posts: 0 },
  { id: 5, avatar: Avatar5, name: "Grand Events", posts: 3 },
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData);
  return (
    <section className="authors">
      {authors.length > 0 ? (
        <div className="container authors__container">
          {authors.map(({ id, avatar, name, posts }) => {
            return (
              <Link key={id} to={`/posts/users/${id}`} className="author">
                <div className="author__avatar">
                  <img src={avatar} alt={`${name}`} />
                </div>
                <div className="author__info">
                  <h4>{name}</h4>
                  <p>{`${posts} posts`}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h2 className="center">No users/authors found</h2>
      )}
    </section>
  );
};

export default Authors;
