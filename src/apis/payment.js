import { getCustomAxios } from './axios';

const axios = getCustomAxios();

export const updatePaymentDetailsApi = (pid, userId, price, payment_id) => {
	// let fomr = new FormData();
	// fomr.append('pid', pid);
	// fomr.append('userId', userId);
	// fomr.append('price', price);
	// fomr.append('payment_id', payment_id);

	// return axios.post('/paymentSuccess', fomr);
	let orderId = 54846145;
	return orderId;
};
