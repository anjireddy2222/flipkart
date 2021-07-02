import { useEffect } from 'react';
import { useState } from 'react';
import { getProfileApi, upfdateProfilePicApi } from '../../apis/profile';
import Nav from '../Nav/Nav';
import { AWS_S3_URL } from '../../utils/constants';

const UserProfile = () => {
	const [profile, setProfile] = useState({ metaData: {} });
	const [userId, setUserId] = useState(localStorage.getItem('userId'));
	const [allowedTypes, setAllowedTypes] = useState(['image/png', 'image/jpeg']);
	const [imageError, setImageError] = useState('');
	const [imageSuccess, setImageSUccess] = useState('');

	useEffect(() => {
		const getProfileData = async () => {
			try {
				const apiResponse = await getProfileApi(userId);
				console.log(apiResponse);
				if (apiResponse.data.result == 'SUCCESS') {
					setProfile(apiResponse.data.data.profile[0]);
				}
			} catch (error) {
				console.log(error.message);
			}
		};
		getProfileData();
	}, []);

	const handleImageUpload = async (e) => {
		var files = e.target.files;
		if (files.length == 1) {
			var noOfErrors = 0;
			var type = files[0].type;
			if (allowedTypes.includes(type) == false) {
				noOfErrors = 1;
				setImageError('png and jpeg images only allowed');
				return;
			}

			var size = files[0].size / 1024 / 1024;
			// 1024 bytes = 1KB, 1024 KB = 1 MB, 1024 MB = 1GB
			if (size > 2) {
				noOfErrors = 1;
				setImageError('Image should be less than 2 MB');
				return;
			}

			if (noOfErrors == 0) {
				setImageError('');
				var apiResponse = await upfdateProfilePicApi(files[0]);
				if (apiResponse.data.result == 'SUCCESS') {
					setImageSUccess('Image uploaded successfully');
					setImageError('');
				} else {
					setImageSUccess('');
					setImageError(apiResponse.data.message);
				}
			}
		} else {
			setImageError('Please select image');
		}
	};

	return (
		<>
			<Nav showimagenav={false} showtextnav={true} />
			<div className='container mt-4'>
				<div className='row'>
					<div className='col-lg-2'></div>
					<div className='col-lg-8 bg-light'>
						<div className='card shadow-light border-0 mt-2'>
							<div className='card-body'>
								<h3>Profile</h3>
							</div>
						</div>
						<div className='card shadow-light border-0 mt-4 mb-4'>
							<div className='card-body'>
								<div className='small'>PROFILE IMAGE</div>
								<img className='rounded-circle' src={AWS_S3_URL + '150_' + profile.profilePic} />
								<br />
								<div class='custom-file custom-file-width mt-2 ml-2 mb-4'>
									<input type='file' class='custom-file-input' id='customFile' onChange={(e) => handleImageUpload(e)} />
									<label class='custom-file-label' for='customFile'>
										Choose files
									</label>
								</div>
								<div>
									<span className='text-danger'>{imageError}</span>
								</div>

								<h4>Account details</h4>
								<div className='text-secondary small mt-2'>NAME</div>
								<div>{profile.name}</div>
								<div className='text-secondary small mt-2'>EMAIL</div>
								<div>{profile.email}</div>
								<div className='text-secondary small mt-2'>STATUS</div>
								<div>{profile.metaData.status}</div>
								<div className='text-secondary small mt-2'>ABOUT</div>
								<div>{profile.metaData.about}</div>

								<h4 className='mt-3'>Links</h4>
								<div className='text-secondary small mt-2'>MOBILE</div>
								<div>
									{' '}
									<a href={'tel:' + profile.metaData.mobile} target='_blank'>
										{profile.metaData.mobile}
									</a>
								</div>
								<div className='text-secondary small mt-2'>WEBISTE</div>
								<div>
									<a href={profile.metaData.website} target='_blank'>
										{profile.metaData.website}
									</a>
								</div>
								<div className='text-secondary small mt-2'>INSTAGRAM</div>
								<div>
									<a href={profile.metaData.instagram} target='_blank'>
										{profile.metaData.instagram}
									</a>
								</div>
								<div className='text-secondary small mt-2'>FACEBOOK</div>
								<div>
									<a href={profile.metaData.facebook} target='_blank'>
										{profile.metaData.facebook}
									</a>
								</div>
								<div className='text-secondary small mt-2'>LINKEDIN</div>
								<div>
									<a href={profile.metaData.linkedin} target='_blank'>
										{profile.metaData.linkedin}
									</a>
								</div>
								<div className='text-secondary small mt-2'>YOUTUBE</div>
								<div>
									<a href={profile.metaData.youtube} target='_blank'>
										{profile.metaData.youtube}
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-2'></div>
				</div>
			</div>
		</>
	);
};

export default UserProfile;
