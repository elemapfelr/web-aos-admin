import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Aside.scss';

function Aside(props) {
	const navigate = useNavigate();
	const [leftTime, setLeftTime] = useState('57분 24초');
	const [asideState, setAsideState] = useState('');

	return (
		<>
			<aside className={asideState}>
				<div className="list">
					<div className="topList">
						<p>Customer List</p>
					</div>
					<ul className="scrollable">
						<li>List</li>
						<li>List</li>
						<li>List</li>
					</ul>
				</div>
				<div
					className="minimalizeAside"
					onClick={() => {
						asideState == '' ? setAsideState('mini') : setAsideState('');
					}}
				>
					<p>Hide Aside</p>
					<i className="fa-solid fa-angle-right"></i>
				</div>
			</aside>
			<div
				className={`openAside ${asideState}`}
				onClick={() => {
					setAsideState('');
				}}
			>
				ASIDE OPEN
			</div>
		</>
	);
}

export default Aside;
