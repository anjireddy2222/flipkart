import { getCustomAxios } from './axios';

const axios = getCustomAxios();

export const updateNotificationToken = () => {
	let form = new FormData();
	form.append('userId', localStorage.getItem('userId'));
	form.append('token', localStorage.getItem('notificationToken'));
	axios.push('/path', form);
};
