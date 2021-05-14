import Nav from '../Nav/Nav';
import queryString from 'query-string';
import { useState } from 'react';
import cookie from 'react-cookies';
import { useSelector, useDispatch } from 'react-redux';

const Profile = () => {
	let params = queryString.parse(window.location.search);
	const [uid, setUid] = useState(params.uid);
	const [loggedInUid, setLoggedInUid] = useState(cookie.load('uid'));
	

	const updateUserId = () => {
		
		
	};

	return (
		<>
			<Nav showimagenav={false} showtextnav={true} />
			<div className='container mt-4'>
				<div className='row'>
					<div className='col-lg-12'>Name: Bhargav</div>
					<div className='col-lg-12'>Email: bhargav@edstaack.com</div>
					<div className='col-lg-12'>Mobile: 7022858863</div>
					<div className="col-lg-12">UserId: 0</div>
				</div>
				<div className='row'>
					<div className='col-lg-12'>
						{uid == loggedInUid && (
							<button type='button' className='btn btn-success m-2' onClick={updateUserId}>
								Edit Profile
							</button>
						)}
						{uid != loggedInUid && (
							<button type='button' className='btn btn-primary m-2'>
								Add Friend
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
};


export default Profile;
