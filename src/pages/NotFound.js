import React from 'react';
import Layout from '../components/Layout/Layout';
import style from './NotFound.module.scss';

function Error() {
	return (
		<div>
			<p>요청하신 페이지를 찾을 수 없습니다. 올바른 URL을 입력하였는지 확인하세요.</p>
		</div>
	);
}

function NotFound() {
	return <Error />;
}

export default NotFound;
