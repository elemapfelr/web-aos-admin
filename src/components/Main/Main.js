import React, { useEffect, useState } from 'react';
import './Main.scss';
import Section from '../Section/Section';

function BreadCrumb(props) {
	if (props.menuName) {
		return (
			<div className="breadCrumb">
				<p>{props.menuGroupName}</p> <span>&gt;</span> <p>{props.menuName}</p>
			</div>
		);
	} else {
		return null;
	}
}

function Main(props) {
	const [screenBtn, setScreenBtn] = useState({
		class: 'fa-solid fa-up-right-and-down-left-from-center',
		tooltip: 'FullScreen',
	});
	useEffect(() => {
		if (props.screen == '') {
			setScreenBtn({
				class: 'fa-solid fa-up-right-and-down-left-from-center',
				tooltip: 'FullScreen',
			});
		} else {
			setScreenBtn({
				class: 'fa-solid fa-down-left-and-up-right-to-center',
				tooltip: 'Normal',
			});
		}
	}, [props.screen]);
	return (
		<main>
			<div className="toolbar">
				<div className="leftBox">
					<BreadCrumb menuGroupName={props.menuGroupName} menuName={props.menuName} />
				</div>
				<div className="title">{props.title}</div>
				<div className="rightBox">
					<span className="help">
						<i className="fa-regular fa-circle-question" data-tooltip="Manual"></i>
					</span>
					<span
						className="fullScreen"
						onClick={() => {
							if (props.screen == '') {
								props.setScreen('fullScreen');
							} else {
								props.setScreen('changingToNormalSize');
								setTimeout(() => {
									props.setScreen('');
								}, 300);
							}
						}}
					>
						<i className={screenBtn.class} data-tooltip={screenBtn.tooltip}></i>
					</span>
					<span className="popup">
						<i className="fa-solid fa-square-arrow-up-right" data-tooltip="Popup"></i>
					</span>
				</div>
			</div>
			<Section content={props.content} />
		</main>
	);
}

export default Main;
