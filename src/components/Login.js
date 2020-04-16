import React from "react";
import "./components_styles/login.css";
import { BrowserRouter as Router } from "react-router-dom";


export default function Login(props) {
  return (
    <Router>
      <main class="login-main">
        <section class="logo-section">
          <div class="logo-container">
            <img src="stylesheets/images/genius_warm_white.png" alt="Genius" />
          </div>
        </section>
        <section class="login-section">
          <div class="login-container">
            <h1>welcome</h1>
            <h2>login to continue</h2>
            <form action="" method="">
              <div class="login-param">
                <input
                  class="login__text"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  autocomplete="off"
                />
                <label class="login__label-email" for="email"></label>
              </div>
              <div class="login-param">
                <input
                  class="login__text"
                  type="password"
                  name="passworde"
                  id="password"
                  placeholder="Password"
                />
                <label class="login__label-password" for="password"></label>
              </div>
              <button
                type="button"
                class="button btn-rose"
                onClick={() => props.onClick()}
              >
                Log in
              </button>
            </form>
            <ul class="login-options">
              <li class="login-option">
                <a href="#">Forgot password? </a>
              </li>
              <li class="login-option">
                Don't have an account? <a href="#">Sign up</a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </Router>
  );
}
