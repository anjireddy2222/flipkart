import { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import { getToken, onMessageListener } from './firebase';
const Notify = () => {
	const [isTokenFound, setTokenFound] = useState(false);
	const [token, setToken] = useState(localStorage.getItem('notificationToken') == null ? '' : localStorage.getItem('notificationToken'));

	if (localStorage.getItem('notificationToken') == null) {
		getToken();
	}

	onMessageListener().then((data) => {
		console.log(data.notification.title, data.notification.body);
	});

	return (
		<>
			<Nav showimagenav={false} showtextnav='true' />
			<div className='container'>
				<div className='row'>
					<div className='col-lg-12 t-3 text-center'>
						Show notifications <br />
						{token}
					</div>
				</div>
			</div>
		</>
	);
};

export default Notify;
