import React, { useEffect, useState } from 'react';
import './Modal.scss';

function Modal(props) {
	const [active, setActive] = useState('modal');
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [buttons, setButtons] = useState([]);
	useEffect(() => {
		setActive(props.modalData?.active ? 'modal active' : 'modal');
		setTitle(props.modalData?.title ?? '');
		setContent(props.modalData?.content ?? '');
		setButtons(props.modalData?.btns ?? []);
	}, [props.modalData]);

	function Buttons() {
		return buttons.map((btn) => {
			return (
				<button className={btn.color} onClick={btn.callback} key={btn.text}>
					{btn.text}
				</button>
			);
		});
	}

	return (
		<div className={active}>
			<div className="layerPopup">
				<div className="popupHead">
					<h3>{title}</h3>
					<i
						className="fa-solid fa-xmark"
						onClick={() => {
							props.setModal({ active: false });
						}}
					></i>
				</div>
				<div className="popupBody">{content}</div>
				<div className="btnBox">
					<Buttons />
				</div>
			</div>
		</div>
	);
}

export default Modal;
