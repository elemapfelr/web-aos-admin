import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import ManageUser from './pages/ManageUser';
import StyleGuide from './pages/StyleGuide';
import Layout from './components/Layout/Layout';
import ApiStatus from './pages/ApiStatus';

function Routers() {
	const navigate = useNavigate();
	let isAuthorized = sessionStorage.getItem('isAuthorized');
	return (
		<>
			{useEffect(() => {
				const path = window.location.pathname;
				!isAuthorized ? navigate('/login', { replace: true }) : navigate(path, { replace: true });
			}, [])}
			<Routes>
				<Route path="/" element={<Layout title="Dash Board" content={<DashBoard />} />} />
				<Route path="/login" element={<Login />} />
				<Route
					path="/system/manageUser"
					element={<Layout title="유저관리" content={<ManageUser />} />}
				/>
				<Route
					path="/system/styleGuide"
					element={<Layout title="Style Guide" content={<StyleGuide />} />}
				/>
				<Route
					path="/system/manageApiStatus"
					element={<Layout title="API Status" content={<ApiStatus />} />}
				/>
				<Route path="/*" element={<Layout title="404 Not Found" content={<NotFound />} />} />
			</Routes>
		</>
	);
}

export default Routers;
