import React, { useEffect, useRef, useState } from 'react';
import './CheckBox.scss';

function CheckBox(props) {
	const [checkedState, setCheckedState] = useState(false);
	const checkBoxInput = useRef();
	useEffect(() => {
		checkBoxInput.current.checked = checkedState;
	}, [checkedState]);
	return (
		<div className="checkBoxDiv">
			<input
				type="checkBox"
				className="chkBox"
				id={props.id}
				defaultChecked={checkedState}
				onChange={(e) => {
					e.target.checked ? setCheckedState(true) : setCheckedState(false);
				}}
				ref={checkBoxInput}
			/>
			<label className="checkBox" htmlFor={props.id}></label>
			<span
				style={{ color: props.color }}
				onClick={() => {
					checkedState ? setCheckedState(false) : setCheckedState(true);
				}}
			>
				{props.text}
			</span>
		</div>
	);
}

export default CheckBox;
