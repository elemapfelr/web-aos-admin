import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Aside.scss';

function Aside() {
	const navigate = useNavigate();
	return (
		<aside>
			<div className="userBox"></div>
			<div className="btns">
				<div className="help">
					<i className="fa-regular fa-circle-question"></i>
				</div>
				<div className="alarm">
					<i className="fa-regular fa-bell"></i>
				</div>
				<button
					className="primary"
					onClick={() => {
						sessionStorage.removeItem('isAuthorized');
						navigate('/login');
					}}
				>
					LOG OUT
				</button>
			</div>
		</aside>
	);
}

export default Aside;
