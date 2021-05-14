import { useDispatch, useSelector } from 'react-redux';
import Nav from '../Nav/Nav';

const Cart = () => {
	const cartItems = useSelector((appData) => appData.cartItems);
	const dispatch = useDispatch();

	const removeItem = (title) => {
		const action = { type: 'REMOVE_FROM_CART', data: title };
		dispatch(action);
	};

	return (
		<>
			<Nav showimagenav={false} showtextnav='true' />
			<div className='container'>
				<div className='row'>
					{cartItems.map((item) => (
						<div className='col-lg-12 mb-3'>
							<h2>{item.title}</h2>
							<button type='button' className='btn btn-danger' onClick={(e) => removeItem(item.title)}>
								-
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Cart;
