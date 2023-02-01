import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Nav.scss';
import axios from 'axios';

function Nav(props) {
	const navigate = useNavigate();
	const [menuData, setMenuData] = useState(null);
	const [menuGroupActive, setMenuGroupActive] = useState();
	const [menuActive, setMenuActive] = useState();
	const [navState, setNavState] = useState('');

	useEffect(() => {
		axios.get('/menuData.json').then((res) => {
			setMenuData(res.data);
		});
	}, []);

	if (menuData) {
		return (
			<>
				<nav className={navState}>
					<Link
						to="/"
						className="logo"
						onClick={() => {
							setMenuGroupActive();
							setMenuActive();
							props.setMenuName();
							props.setMenuGroupName();
						}}
					>
						<img src="/logo.svg" alt="logo" />
						<p>Dash Board</p>
					</Link>
					<menu>
						{menuData.menu_group.map((menuGroup) => {
							let filtered = menuData['menu'].filter(
								(x) => x.menu_group_seq_no == menuGroup.menu_group_seq_no
							);
							return (
								<div
									className={
										menuGroupActive == menuGroup.menu_group_seq_no
											? 'menuGroup active'
											: 'menuGroup'
									}
									key={menuGroup.menu_group_seq_no}
								>
									<div className="menuGroupTitle">
										<i className={menuGroup.menu_group_icon}></i>
										<p>{menuGroup.menu_group_name}</p>
									</div>
									<ul>
										{filtered.map((menu) => {
											return (
												<li
													className={menuActive == menu.menu_seq_no ? 'active' : ''}
													key={menu.menu_seq_no}
													onClick={() => {
														setMenuActive(menu.menu_seq_no);
														setMenuGroupActive(menu.menu_group_seq_no);
														props.setMenuName(menu.menu_name);
														props.setMenuGroupName(menuGroup.menu_group_name);
													}}
												>
													<Link to={menu.menu_link_url}>{menu.menu_name}</Link>
												</li>
											);
										})}
									</ul>
								</div>
							);
						})}
					</menu>
					<div
						className="minimalizeMenu"
						onClick={() => {
							if (navState == '') {
								setNavState('mini');
							} else {
								setNavState('expandingMenuArea');
								setTimeout(() => {
									setNavState('');
								}, 300);
							}
						}}
					>
						<i className="fa-solid fa-angle-left"></i>
						<p>Hide Menu</p>
					</div>
				</nav>
			</>
		);
	}
}

export default Nav;
