import { getCustomAxios } from './axios';

const axios = getCustomAxios();

export const getProfileApi = (userId) => {
	const form = new FormData();
	form.append('userId', userId);

	return axios.post('/user/getUserProfile', form);
};

export const upfdateProfilePicApi = (file) => {
	const form = new FormData();
	form.append('userId', localStorage.getItem('userId'));
	form.append('image', file);

	return axios.post('/user/updateProfilePic', form);
};
