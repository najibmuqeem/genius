import React from "react";
import "./components_styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <ul class="footer-list">
        <li class="footer-list__item">
          <a href="mailto: undefined@gmail.com">Contact us</a>
        </li>
        <li class="footer-list__item">
          <img
            width="100"
            src="stylesheets/images/genius_main_green_blue.png"
          ></img>
        </li>
        <li class="footer-list__item">&copy; Undefined</li>
      </ul>
    </footer>
  );
}
