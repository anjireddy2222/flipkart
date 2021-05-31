import { useState } from 'react';
import { useHistory } from 'react-router';
import { loginApi } from '../../apis/auth';
import { ToastContainer, toast } from 'react-toastify';


const Auth = () => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [pword, setPword] = useState('');
	const [msg, setMsg] = useState('');

	const handleLogin = async () => {
		//console.log(email, pword);
		// loginApi(email, pword).then((response) => {
		// 	console.log('response', response);
		// 	if (response.data.result == 'SUCCESS') {
		// 		localStorage.setItem('userId', response.data.data.userId);
		// 		localStorage.setItem('token', response.data.data.token);
		// 		localStorage.setItem('userName', response.data.data.userName);
		// 		history.push('/');
		// 	} else {
		// 		setMsg(response.data.message);
		// 	}
		// });

		try {
			let response = await loginApi(email, pword);
			localStorage.setItem('userId', response.data.data.userId);
			localStorage.setItem('token', response.data.data.token);
			localStorage.setItem('userName', response.data.data.userName);
			history.push('/');
			console.log(response.data);
		} catch (err) {
			setMsg(err.message);
			toast(err.message, { type: toast.TYPE.SUCCESS    });
		}

		// try{
		// 	let products = [];
		// 	console.log([...products[2]]);
		// }catch(err){
		// 	setMsg(err.message);
		// }
	};

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-lg-4'></div>
				<div className='col-lg-4'>
					<center>
						<h2>Login</h2>
					</center>
					<input className='form-control m-2' type='text' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
					<input
						className='form-control m-2'
						type='password'
						value={pword}
						placeholder='Password'
						onChange={(e) => setPword(e.target.value)}
					/>
					<button className='btn btn-primary m-2' onClick={handleLogin}>
						Login
					</button>
					<div className='text-danger p-2'>{msg}</div>
				</div>
				<div className='col-lg-4'></div>
			</div>
			<ToastContainer position='bottom-center' />
		</div>
	);
};

export default Auth;
