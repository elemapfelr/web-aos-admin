import React, { useState } from 'react';
import './Layout.scss';
import Nav from '../Nav/Nav';
import Aside from '../Aside/Aside';
import Main from '../Main/Main';
import Modal from '../Modal/Modal';
import Header from '../Header/Header';

function Layout(props) {
	const [modal, setModal] = useState(null);
	const [screen, setScreen] = useState('');
	const [menuGroupName, setMenuGroupName] = useState();
	const [menuName, setMenuName] = useState();

	return (
		<div id="wrap" className={screen}>
			<Header setModal={setModal} />
			<Nav setMenuGroupName={setMenuGroupName} setMenuName={setMenuName} />
			<Main
				menuGroupName={menuGroupName}
				menuName={menuName}
				title={props.title}
				content={props.content}
				setModal={setModal}
				screen={screen}
				setScreen={setScreen}
			/>
			<Aside setModal={setModal} />
			<Modal modalData={modal} setModal={setModal} />
		</div>
	);
}

export default Layout;
