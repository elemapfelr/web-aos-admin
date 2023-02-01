import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';

function Header(props) {
	const navigate = useNavigate();
	const [leftTime, setLeftTime] = useState('57분 24초');
	const [asideState, setAsideState] = useState('');

	return (
		<header>
			<div className="left">
				<h1>Add On System</h1>
				<small className="version">v2.0</small>
			</div>
			<div className="center">알림</div>
			<div className="right">
				<div className="userBox">
					<Link to="/" className="idBox">
						<p id="userId">Admin</p>
						<i className="fa-solid fa-gear"></i>
					</Link>
					<p id="leftTime">{leftTime}</p>
					<button
						className="outline-primary"
						onClick={() => {
							console.log('연장됨!');
						}}
					>
						로그인 시간 연장
					</button>
					<button
						className="outline-crush"
						onClick={() => {
							props.setModal({
								active: true,
								title: '로그아웃',
								content: '로그아웃 하시겠습니까?',
								btns: [
									{
										text: '로그아웃',
										color: 'crush',
										callback: () => {
											sessionStorage.removeItem('isAuthorized');
											navigate('/login');
										},
									},
								],
							});
						}}
					>
						로그아웃
					</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
