import React from 'react';
import Layout from '../components/Layout/Layout';
import style from './DashBoard.module.scss';

function Sample() {
	return (
		<div>
			<div className={style.box}>box1</div>
			<div className={style.box}>box2</div>
			<div className={style.box}>box3</div>
			<div className={style.box}>box4</div>
			<div className={style.box}>box5</div>
			<div className={style.box}>box6</div>
			<div className={style.box}>box7</div>
			<div className={style.box}>box8</div>
			<div className={style.box}>box9</div>
			<div className={style.box}>box10</div>
		</div>
	);
}

function DashBoard() {
	return <Sample />;
}

export default DashBoard;
