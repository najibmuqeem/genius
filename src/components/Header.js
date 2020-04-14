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
							
							width="42"
						/>
					</li>
				</ul>
				<ul class="user-nav">
					<li class="user-nav__item">
						<div class="friends">
							Friends
							<ul class="user-nav__friends">
								<li class="user-nav__friend">Rachel Green</li>	
								<li class="user-nav__friend">Ross Geller</li>
							</ul>
						</div>
					</li>
					<li class="user-nav__item">
						<div class="account">
							Welcome, username
							<ul class="user-nav__user">
								<li class="user-nav__friend">Profile</li>
								<li class="user-nav__friend">Purchase history</li>
							</ul>
						</div>
					</li>
					<li class="user-nav__item">Log out</li>
				</ul>
			</nav>
		</header>
	);
}
