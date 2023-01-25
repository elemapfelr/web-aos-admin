import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.scss';
import axios from 'axios';

function Nav() {
	const navigate = useNavigate();
	const [menuData, setMenuData] = useState(null);
	const [menuGroupActive, setMenuGroupActive] = useState();
	const [menuActive, setMenuActive] = useState();
	const [navState, setNavState] = useState('');

	function toggleActive(seq_no) {
		if (seq_no == menuGroupActive) {
			setMenuGroupActive();
		} else {
			setMenuGroupActive(seq_no);
		}
	}

	function toggleActiveMenu(seq_no) {
		if (seq_no == menuActive) {
			setMenuActive();
		} else {
			setMenuActive(seq_no);
		}
	}

	useEffect(() => {
		axios.get('./menuData.json').then((res) => {
			setMenuData(res.data);
		});
	}, []);

	if (menuData) {
		return (
			<>
				<nav className={navState}>
					<div className="logo">LOGO</div>
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
									<div
										className="menuGroupTitle"
										onClick={() => {
											toggleActive(menuGroup.menu_group_seq_no);
										}}
									>
										<i className={menuGroup.menu_group_icon}></i>
										<p>{menuGroup.menu_group_name}</p>
									</div>
									<ul
										style={
											menuGroupActive == menuGroup.menu_group_seq_no
												? { maxHeight: filtered['length'] * 37 + 'px' }
												: { maxHeight: 0 + 'px' }
										}
									>
										{filtered.map((menu) => {
											return (
												<li
													className={menuActive == menu.menu_seq_no ? 'active' : ''}
													key={menu.menu_seq_no}
													onClick={() => {
														toggleActiveMenu(menu.menu_seq_no);
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
							navState == '' ? setNavState('mini') : setNavState('');
						}}
					>
						<i className="fa-solid fa-angle-left"></i>
						<p>Minimalize Menu</p>
					</div>
				</nav>
				<div
					className={`openMenu ${navState}`}
					onClick={() => {
						setNavState('');
					}}
				>
					MENU OPEN
				</div>
			</>
		);
	}
}

export default Nav;
