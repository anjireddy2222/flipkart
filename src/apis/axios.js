import axios from 'axios';

export const getCustomAxios = () => {
	const customAxios = axios.create({
		baseURL: 'http://localhost:80',
	});

	customAxios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

	customAxios.interceptors.response.use((response) => {
		if (response.headers['token'] != undefined) {
			localStorage.setItem('token', response.headers['token']);
		}
		return response;
	});

	return customAxios;
};
