import "./components_styles/header.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFriendsForUser } from "../fetchers.js";

export default function Header() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
		getFriendsForUser(1).then((res) => {
      setFriends(() => res);
      console.log(res)
		});
  });
  
  

  return (
    <header>
      <nav>
        <ul class="main-nav">
          <Link to="/">
            <li class="main-nav__item">
              <img
                src="stylesheets/images/genius_green_blue.png"
                alt="Genius Logo"
                width="100"
              />
            </li>
          </Link>
          <Link to="/">
            <li class="main-nav__item">
              <a href="#">Home</a>
            </li>
          </Link>
        </ul>
        <ul class="user-nav">
          <li class="user-nav__item friends">
            <p>Friends</p>
            <ul class="user-nav__friends">
              <Link to="/friends">
                <li class="user-nav__friend">Monica Geller</li>
              </Link>
              <li class="user-nav__friend">Ross Geller</li>
            </ul>
          </li>
          <li class="user-nav__item account">
            <p>Welcome, Rachel</p>
            <ul class="user-nav__user">
              <li class="user-nav__friend">Profile</li>
              <Link to="/purchased">
                <li class="user-nav__friend">Purchase history</li>
              </Link>
            </ul>
          </li>
          <li class="user-nav__item">
            <p>Log out</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}
