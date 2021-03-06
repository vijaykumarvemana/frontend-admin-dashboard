import React, { Component } from 'react';
import "./Login.css"

const BASE_URL = process.env.REACT_APP_API_URL;

export default class Login extends Component {
	
	state = {
		loggedinUser: {
			email: '',
			password: '',
			accessToken: null,
			loggedIn: false,
		},
	};

	handleInput = (key, value) => {
		this.setState({
			loggedinUser: {
				...this.state.loggedinUser,
				[key]: value,
			},
		});
	};
	handleSubmit = async (e) => {
		e.preventDefault();
		console.log(this.state.loggedinUser);

		try {
			let response = await fetch(`${BASE_URL}/login`, {
				method: 'POST',
				body: JSON.stringify(this.state.loggedinUser),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (response.ok) {
				let data = await response.json();
				console.log(data);

				localStorage.setItem('token', data.accessToken);

				alert('login Successfull');
				this.setState({
					loggedinUser: {
						email: '',
						password: '',
						loggedIn: true,
						accessToken: localStorage.getItem('token'),
					},
				});
			} else {
				alert('SOMETHING WENT WRONG ON THE SERVER');
			}
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return (
			<>
				{!this.state.loggedinUser.loggedIn ? (
					<div className='auth-wrapper'>
						<div className='auth-inner'>
							<form onSubmit={this.handleSubmit}>
								<h3>Login</h3>
								<p>email: <strong>vemanavijaykumar154@gmail.com</strong></p>
								<p>password:<strong>12345</strong></p>

								<div className='form-group'>
									<label>Email address</label>
									<input
										type='email'
										className='form-control'
										placeholder='vemanavijaykumar154@gmail.com'
										value={this.state.loggedinUser.email}
										onChange={(e) => this.handleInput('email', e.target.value)}
									/>
								</div>

								<div className='form-group'>
									<label>Password</label>
									<input
										type='password'
										className='form-control'
										placeholder='12345'
										value={this.state.loggedinUser.password}
										onChange={(e) =>
											this.handleInput('password', e.target.value)
										}
									/>
								</div>
								<button type='submit' className='btn btn-primary btn-block'>
									Submit
								</button>
							</form>
						</div>
					</div>
				) : (
                    window.location.reload()
					
                    
				)}
			</>
		);
	}
}