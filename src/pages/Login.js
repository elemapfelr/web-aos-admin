import React, { useState, useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import style from './Login.module.scss';
import axios from 'axios';
import CheckBox from './../components/CheckBox/CheckBox';
import { Navigate, useNavigate } from 'react-router-dom';
import moment from 'moment';

function Login() {
	const [loading, setLoading] = useState(false);
	const [id, setId] = useState('');
	const [idState, setIdState] = useState('');
	const [pw, setPw] = useState('');
	const [pwState, setPwState] = useState('');
	const navigate = useNavigate();

	function IdError(props) {
		if (props.msg !== '') {
			return <u className={`${style.idError}`}>{props.msg}</u>;
		}
	}
	function PwError(props) {
		if (props.msg !== '') {
			return <u className={`${style.pwError}`}>{props.msg}</u>;
		}
	}

	function loginProcess() {
		setLoading(true);
		console.log(`ID: ${id} PW: ${pw}`);
		if (id == '') {
			setLoading(false);
			setIdState('아이디를 입력하세요');
		} else if (pw == '') {
			setLoading(false);
			setPwState('비밀번호를 입력하세요');
		} else {
			axios({
				url: '/api/v1',
				method: 'POST',
				data: 'hello',
			}).then((res) => console.log(res.data));
			// setTimeout(() => {
			// 	let rand = Math.round(Math.random());
			// 	if (rand == 1) {
			// 		sessionStorage.setItem('isAuthorized', true);
			// 		navigate('/');
			// 	} else {
			// 		let rand2 = Math.round(Math.random());
			// 		rand2 == 1
			// 			? setIdState('아이디를 다시 확인하세요')
			// 			: setPwState('비밀번호를 다시 확인하세요');
			// 		setLoading(false);
			// 	}
			// }, 2000);
		}
	}

	return (
		<div className={`${style.wrap} ${loading ? style.loader : style.deLoader}`}>
			<div className={`${style.loginWrap}`}>
				<div className={`${style.row}`}>
					<div className={`${style.left}`}>SIGN IN</div>
					<div className={`${style.right}`}>
						<span className={`${style.active}`}>Sign in</span>
						<span>Hiworks Login</span>
						<span>Forgot Password</span>
					</div>
				</div>
				<div className={`${style.row}`}>
					<div className={`${style.left}`}>AOS</div>
					<div className={`${style.right}`}></div>
				</div>
				<div className={`${style.row}`}>
					<div className={`${style.right}`}>
						<div className={`${style.inputTitle}`}>ID</div>
						<div className={`${style.inputBox}`}>
							<input
								type="text"
								placeholder="User ID"
								onChange={(e) => {
									setIdState('');
									setId(e.target.value);
								}}
								onKeyUp={(e) => {
									if (window.event.keyCode == 13 && loading == false) {
										loginProcess();
									}
								}}
							/>
							<i></i>
							<IdError msg={idState} />
						</div>
					</div>
				</div>
				<div className={`${style.row}`}>
					<div className={`${style.right}`}>
						<div className={`${style.inputTitle}`}>PW</div>
						<div className={`${style.inputBox}`}>
							<input
								type="password"
								placeholder="Password"
								onChange={(e) => {
									setPwState('');
									setPw(e.target.value);
								}}
								onKeyUp={(e) => {
									if (window.event.keyCode == 13 && loading == false) {
										loginProcess();
									}
								}}
							/>
							<i></i>
							<PwError msg={pwState} />
						</div>
					</div>
				</div>
				<div className={`${style.row}`}>
					<div className={`${style.right}`}>
						<CheckBox id="saveId" text="Remember Me for 30 days" color="#A6A6A6" />
					</div>
				</div>
				<div className={`${style.row}`}>
					<div className={`${style.right}`}>
						<div className={`${style.loginTitle}`}></div>
						<div className={`${style.loginBtnBox}`}>
							<button onClick={loginProcess}>Login</button>
						</div>
					</div>
				</div>
				<div className={`${style.row}`}>
					<div className={`${style.right}`}>
						<div className={`${style.description}`}></div>
					</div>
				</div>
				<span className={`${style.bottomText}`}></span>
			</div>
		</div>
	);
}

export default Login;
