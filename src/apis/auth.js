import { getCustomAxios } from './axios';

const axios = getCustomAxios();

export const loginApi = (email, pword) => {
	let form = new FormData();
	form.append('email', email);
	form.append('password', pword);
	return axios.post('/auth/login', form);
};

export const validateEmailApi = (email, userId) => {
	let form = new FormData();
	form.append('email', email);
	form.append('userId', userId);

	//let headers = { authorization: 'Bearer ' + localStorage.getItem('token') };
	// test comment
	return axios.post('/newping/checkEmailExists', form);
};
