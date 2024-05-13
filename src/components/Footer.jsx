import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className="footer__categories">
        <li>
          <Link to="/posts/categories/Picnics">Picnics</Link>
        </li>
        <li>
          <Link to="/posts/categories/Locations">Locations</Link>
        </li>
        <li>
          <Link to="/posts/categories/RentItems">Rent Items</Link>
        </li>
        <li>
          <Link to="/posts/categories/Birthdays">Birthdays</Link>
        </li>
        <li>
          <Link to="/posts/categories/Weddings">Weddings</Link>
        </li>
        <li>
          <Link to="/posts/categories/Graduations">Graduations</Link>
        </li>
        <li>
          <Link to="/posts/categories/Funerals">Funerals</Link>
        </li>
        <li>
          <Link to="/posts/categories/Uncategorised">Uncategorised</Link>
        </li>
      </ul>
      <div className="footer__copyright">
        <small>All rights reserved &copy; Copyright Margret Mauno</small>
      </div>
    </footer>
  );
};

export default Footer;
