import { useState } from 'react';
import { validateEmailApi } from '../../apis/auth';

const EmailValidator = () => {
	const [email, setEmail] = useState('');
	const [msg, setMsg] = useState('');

	const checkEmail = () => {
		let userId = localStorage.getItem('userId');
		validateEmailApi(email, userId).then((response) => {
			//console.log(response.headers['token']);
			if (response.headers['token'] != undefined) {
				localStorage.setItem('token', response.headers['token']);
			}
		});
	};

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-lg-4'></div>
				<div className='col-lg-4'>
					<center>
						<h3>Validate Email</h3>
					</center>
					<input type='text' className='form-control m-2' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
					<button className='btn btn-primary' onClick={checkEmail}>
						Validate
					</button>
					<div className='text-danger'>{msg}</div>
				</div>
				<div className='col-lg-4'></div>
			</div>
		</div>
	);
};

export default EmailValidator;
