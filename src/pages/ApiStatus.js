import React from 'react';
import SearchOption from '../components/SearchOption/SearchOption';
import style from './ApiStatus.module.scss';

function ApiStatus() {
	return (
		<>
			<article className={`${style.summary}`}>
				<div className={`${style.content}`}>
					<div className={`${style.apiReq}`}>
						<div>
							<h5 className={`${style.num}`}>
								<b>0</b>건
							</h5>
							<h5>정상</h5>
						</div>
						<i className="fa-solid fa-circle-check"></i>
					</div>
					<div className={`${style.apiCaution}`}>
						<div>
							<h5 className={`${style.num}`}>
								<b>0</b>건
							</h5>
							<h5>요청실패</h5>
						</div>
						<i className="fa-solid fa-screwdriver-wrench"></i>
					</div>
					<div className={`${style.apiErr}`}>
						<div>
							<h5 className={`${style.num}`}>
								<b>0</b>건
							</h5>
							<h5>에러</h5>
						</div>
						<i className="fa-solid fa-triangle-exclamation"></i>
					</div>
					<div className={`${style.apiUnknown}`}>
						<div>
							<h5 className={`${style.num}`}>
								<b>0</b>건
							</h5>
							<h5>응답 없음</h5>
						</div>
						<i className="fa-solid fa-circle-question"></i>
					</div>
					<div className={`${style.checkAPIBox}`}>
						<h5>마지막 검사 시간</h5>
						<p>0000-00-00 00:00:00</p>
						<button id="apiAllCheckBtn" className="caution">
							전체 API 검사
							<i className="fa-solid fa-plug-circle-check"></i>
						</button>
						<button id="interval" className="primary">
							자동 검사 인터벌
							<i className="fa-regular fa-clock duration"></i>
						</button>
					</div>
				</div>
			</article>
			<article className={`${style.apiStatusList}`}>
				<SearchOption />
				<table className="stripe noBorder">
					<thead>
						<tr className="secondary">
							<th colSpan={1}>#</th>
							<th colSpan={2}>API Name</th>
							<th colSpan={4}>URL</th>
							<th colSpan={2}>Result Code</th>
							<th colSpan={8}>개별 로그</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th colSpan={1}>1</th>
							<td colSpan={2}>Menu List</td>
							<td colSpan={4}>/api/v1/menu/menuList</td>
							<td colSpan={2}>D999</td>
							<td colSpan={8}>
								기타오류 <br /> ERROR 1146 (42S02): Table 'aosdb.t_api_auth_group' doesn't exist
							</td>
						</tr>
						<tr>
							<th colSpan={1}>1</th>
							<td colSpan={2}>Menu List</td>
							<td colSpan={4}>/api/v1/menu/menuList</td>
							<td colSpan={2}>D999</td>
							<td colSpan={8}>
								기타오류 <br /> ERROR 1146 (42S02): Table 'aosdb.t_api_auth_group' doesn't exist
							</td>
						</tr>
						<tr>
							<th colSpan={1}>1</th>
							<td colSpan={2}>Menu List</td>
							<td colSpan={4}>/api/v1/menu/menuList</td>
							<td colSpan={2}>D999</td>
							<td colSpan={8}>
								기타오류 <br /> ERROR 1146 (42S02): Table 'aosdb.t_api_auth_group' doesn't exist
							</td>
						</tr>
					</tbody>
				</table>
			</article>
		</>
	);
}

export default ApiStatus;
