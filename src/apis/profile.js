import { getCustomAxios } from './axios';

const axios = getCustomAxios();

export const getProfileApi = (userId) => {
	const form = new FormData();
	form.append('userId', userId);

	return axios.post('/user/getUserProfile', form);
};
