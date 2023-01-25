import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Aside.scss';

function Aside() {
	const navigate = useNavigate();
	return (
		<aside>
			<div className="userBox">
				<div className="topProfile">
					<p>Profile</p>
					<Link to="/">
						<i className="fa-solid fa-gear"></i>
					</Link>
				</div>
				<p id="userId">Admin</p>
				<p id="leftTime">57분 34초</p>
				<div className="flexBox">
					<button className="outline-primary">Extend Login Session</button>
					<button
						className="outline-crush"
						onClick={() => {
							sessionStorage.removeItem('isAuthorized');
							navigate('/login');
						}}
					>
						Log out
					</button>
				</div>
			</div>
			<div className="btns">
				<div className="help">
					<i className="fa-regular fa-circle-question"></i>
				</div>
				<div className="alarm">
					<i className="fa-regular fa-bell"></i>
				</div>
			</div>
		</aside>
	);
}

export default Aside;
