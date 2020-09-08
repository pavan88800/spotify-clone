import React from 'react';
import './login.css';
import { LoginUrl } from './spotify';
const Login = () => {
	return (
		//
		<div className="login">
			<img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify logo" />
			<a href={LoginUrl}>LOGIN WITH SPOTIFY</a>
		</div>
	);
};

export default Login;
