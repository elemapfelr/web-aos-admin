import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/Layout/Layout';
import { useEffect } from 'react';

function Routers() {
	const navigate = useNavigate();
	let isAuthorized = sessionStorage.getItem('isAuthorized');
	return (
		<>
			{useEffect(() => {
				!isAuthorized ? navigate('/login', { replace: true }) : navigate('/', { replace: true });
			}, [])}
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Layout />} />
			</Routes>
		</>
	);
}

export default Routers;
