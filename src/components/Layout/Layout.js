import React from 'react';
import './Layout.scss';
import Nav from '../Nav/Nav';
import Aside from '../Aside/Aside';

function Layout() {
	return (
		<div id="wrap">
			<Nav />
			<main></main>
			<Aside />
		</div>
	);
}

export default Layout;
