import React, { Component } from "react";

import { LoginBtn, LogOutBtn } from '../Components/Buttons/IsLoggedInBtn';
import adminAPI from "../api/adminAPI";

class Auth extends Component {

	state = {
		isLogin: false,
	}

	authWindow = null;

	checkLogin = () => {
		if(sessionStorage.getItem('token')) {
			this.setState({
				isLogin: true,
			});
		};
	};

	componentWillMount() {
		this.checkLogin();
	}

	async componentDidMount() {
		window.addEventListener("message", this.handlerPostMessage);
	}
	
	singIn = async () => {
		const { windowWidth = 500, windowHeight = 500 } = this.props;
		const authUrl = await adminAPI.getGoogleAuthURL();
		this.authWindow = window.open(
			authUrl,
			"",
			`width=${windowWidth},height=${windowHeight}`
		);
	};

	logOut = () => {
		sessionStorage.removeItem('token');
		this.setState({
			isLogin: false,
		})
	}

	handleGoogleCode = async (code) => {
		const token = await adminAPI.getAccessToken(code);
		this.authWindow.close();
		sessionStorage.setItem("token", token);
	};

	handlerPostMessage = async (event) => {
		if (event.origin !== window.location.origin) {
			return;
		}

		const { code } = event.data;

		if (code) {
			return this.handleGoogleCode(code);
		}
	};

	componentWillUnmount() {
		window.removeEventListener("message", this.handlerPostMessage);
	}

	render() {
		const { isLogin } = this.state;

		return (
			<>
				{
					!isLogin ?
					<div onClick={ this.singIn }><LoginBtn /></div> : 
					<div onClick={ this.logOut }><LogOutBtn /></div> 
				}
			</>
		);
	};
};

export { Auth };
