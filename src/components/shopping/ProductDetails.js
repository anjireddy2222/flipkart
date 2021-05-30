import Nav from '../Nav/Nav';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { getProductDetailsApi } from '../../apis/getProductDetails';
import { updatePaymentDetailsApi } from '../../apis/payment';
import { useHistory } from 'react-router';

const ProductDetails = () => {
	let history = useHistory();
	let params = queryString.parse(window.location.search);
	console.log("this",params);

	const [product, setProduct] = useState({});

	useEffect(() => {
		const getProductDetails = (pid) => {
			const apiData = getProductDetailsApi(pid);
			setProduct(apiData);
		};
		getProductDetails(params.pid);
	}, []);

	// send price, key ( razorpay identity token) to payment gateway
	// payment gateway will give you response
	// send that data to backend api - payment order id, paid amount, userid, product

	const handlePayment = () => {
		// prcie product.price // pid priduct.pid // userId from localStorage
		const options = {
			key: 'rzp_live_KQwjVNVEq2LTTz', // Enter the Key ID generated from the Dashboard
			amount: 100,
			description: product.title,
			handler: async function (response) {
				updatePaymentDetails(response);
			},
		};
		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
		console.log(options, product);
	};

	const updatePaymentDetails = (response) => {
		let pid = product.pid;
		let userId = localStorage.getItem('userId');
		let price = product.price;
		let payment_id = response.razorpay_payment_id;
		console.log(pid, userId, price, payment_id);
		let orderId = updatePaymentDetailsApi(pid, userId, price, payment_id);
		history.push('/order-details?orderid=' + orderId);
	};
	return (
		<>
			<Nav showimagenav={false} showtextnav='true' />
			<div className='container'>
				<div className='row'>
					<div className='col-lg-4'></div>
					<div className='col-lg-4'>
						<h2>{product.title}</h2>
						<p className='tetx-secondary'>{product.subText}</p>
						<h6 className='text-danger'>Price: Rs. {product.price}</h6>
						<button className='btn btn-success' onClick={(e) => handlePayment()}>
							Buy Now
						</button>
					</div>
					<div className='col-lg-4'></div>
				</div>
			</div>
		</>
	);
};

export default ProductDetails;
