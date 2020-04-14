import React from "react";

export default function Login() {
  return (
    <main class="login-main">
      <section class="half-page logo-section">
        <div class="logo-container">
          <img src="stylesheets/images/genius_warm_white.png" alt="Genius" />
        </div>
      </section>
      <section class="half-page login-section">
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
            <button type="button" class="button btn-rose">
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
  );
}
