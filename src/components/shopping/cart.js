import { useDispatch, useSelector } from 'react-redux';
import Nav from '../Nav/Nav';

const Cart = () => {
	const cartItems = useSelector((appData) => appData.cartItems);
	const dispatch = useDispatch();

	const decreaseQuantity = (pid) => {
		const action = { type: 'DECREASE_FROM_CART', data: pid };
		console.log(action);
		dispatch(action);
	};


	const increaseQuantity = (pid) => {
		const action = { type: 'INCREASE_FROM_CART', data: pid };
		dispatch(action);
		console.log(action);
	};


	return (
		<>
			<Nav showimagenav={false} showtextnav='true' />
			<div className='container'>
				<div className='row'>
					{cartItems.map((product, i) => (
						<div className='col-lg-12 mb-3' key={i}>
							<h2>{product.item.title}</h2>
							<button type='button' className='btn btn-danger' onClick={ e => decreaseQuantity(product.item.pid)}>
								-
							</button>
							<h5>Quantity: {product.count}</h5>
							<button type='button' className='btn btn-success' onClick={ e => increaseQuantity(product.item.pid)}>
									+
							</button>
							
							
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Cart;
