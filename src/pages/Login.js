import React, { useState, useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import style from './Login.module.scss';
import axios from 'axios';
import CheckBox from './../components/CheckBox/CheckBox';
import { Navigate, useNavigate } from 'react-router-dom';
import moment from 'moment';

function Login() {
	const [loading, setLoading] = useState(false);
	const [idState, setIdState] = useState('');
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

	return (
		<div className={`${style.wrap} ${loading ? style.loader : style.deLoader}`}>
			<div className={`${style.loginWrap}`}>
				<div className={`${style.row}`}>
					<div className={`${style.left}`}>Add On System</div>
					<div className={`${style.right}`}>
						<span className={`${style.active}`}>Sign in</span>
						<span>Sign up</span>
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
								onKeyUp={() => {
									setIdState('');
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
								onKeyUp={() => {
									setPwState('');
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
							<button
								onClick={() => {
									setLoading(true);
									setTimeout(() => {
										let rand = Math.round(Math.random());
										if (rand == 1) {
											sessionStorage.setItem('isAuthorized', true);
											navigate('/');
										} else {
											setIdState('아이디를 다시 확인하세요');
											setPwState('비밀번호를 다시 확인하세요');
											setLoading(false);
										}
									}, 2000);
								}}
							>
								Login
							</button>
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
