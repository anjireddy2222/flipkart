import { useEffect } from 'react';
import { useState } from 'react';
import { getProfileApi } from '../../apis/profile';
import Nav from '../Nav/Nav';

const UserProfile = () => {
	const [profile, setProfile] = useState({});
	const [userId, setUserId] = useState(localStorage.getItem('userId'));

	useEffect(() => {
		const getProfileData = async () => {
			try {
				const apiResponse = await getProfileApi(userId);
				console.log(apiResponse);
			} catch (error) {
				console.log(error.message);
			}
		};
		getProfileData();
	}, []);

	return (
		<>
			<Nav showimagenav={false} showtextnav={true} />
			<div className='container'>
				<div className='row'>
					<div className='col-lg-3'></div>
					<div className='col-lg-6'>Profile</div>
					<div className='col-lg-3'></div>
				</div>
			</div>
		</>
	);
};

export default UserProfile;
