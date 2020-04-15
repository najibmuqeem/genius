import "./components_styles/header.css";
import React from "react";

export default function Header() {
  return (
		<header>
			<nav>
				<ul class="main-nav">
		
					<li class="main-nav__item">
						<img
							src="stylesheets/images/genius.png"
							alt="Genius Logo"
							
							width="100"
						/>
					</li>
				</ul>
				<ul class="user-nav">
					<li class="user-nav__item friends">
						<p>Friends</p>
						<ul class="user-nav__friends">
							<li class="user-nav__friend">Monica Geller</li>	
							<li class="user-nav__friend">Ross Geller</li>
						</ul>
					</li>
					<li class="user-nav__item account">
						<p>Welcome, Rachel</p>
						<ul class="user-nav__user">
							<li class="user-nav__friend">Profile</li>
							<li class="user-nav__friend">Purchase history</li>
						</ul>
					</li>
					<li class="user-nav__item"><p>Log out</p></li>
				</ul>
			</nav>
		</header>
	);
}
