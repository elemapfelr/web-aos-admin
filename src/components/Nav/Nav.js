import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';

function Nav() {
	const navigate = useNavigate();
	return (
		<nav>
			<div className="logo">LOGO</div>
			<menu>
				<div className="menuGroup">
					<div className="menuGroupTitle">
						<i className="fa-solid fa-box"></i>
						<p>Menu Group 1</p>
					</div>
					<ul>
						<li>menu1</li>
						<li>menu2</li>
						<li>menu3</li>
						<li>menu4</li>
					</ul>
				</div>
				<div className="menuGroup">
					<div className="menuGroupTitle">
						<i className="fa-solid fa-tower-cell"></i>
						<p>Menu Group 2</p>
					</div>
					<ul>
						<li>menu1</li>
						<li>menu2</li>
						<li>menu3</li>
						<li>menu4</li>
					</ul>
				</div>
				<div className="menuGroup">
					<div className="menuGroupTitle">
						<i className="fa-solid fa-box"></i>
						<p>Menu Group 1</p>
					</div>
					<ul>
						<li>menu1</li>
						<li>menu2</li>
						<li>menu3</li>
						<li>menu4</li>
					</ul>
				</div>
				<div className="menuGroup">
					<div className="menuGroupTitle">
						<i className="fa-solid fa-tower-cell"></i>
						<p>Menu Group 2</p>
					</div>
					<ul>
						<li>menu1</li>
						<li>menu2</li>
						<li>menu3</li>
						<li>menu4</li>
					</ul>
				</div>
				<div className="menuGroup">
					<div className="menuGroupTitle">
						<i className="fa-solid fa-box"></i>
						<p>Menu Group 1</p>
					</div>
					<ul>
						<li>menu1</li>
						<li>menu2</li>
						<li>menu3</li>
						<li>menu4</li>
					</ul>
				</div>
				<div className="menuGroup">
					<div className="menuGroupTitle">
						<i className="fa-solid fa-tower-cell"></i>
						<p>Menu Group 2</p>
					</div>
					<ul>
						<li>menu1</li>
						<li>menu2</li>
						<li>menu3</li>
						<li>menu4</li>
					</ul>
				</div>
			</menu>
			<div className="settingMenu">
				<i className="fa-solid fa-gear"></i>
				<p>Settings</p>
			</div>
		</nav>
	);
}

export default Nav;
