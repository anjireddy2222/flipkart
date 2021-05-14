import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getHomePageCategoriesApi } from '../../apis/getHomePagecategories';

const Categories = ( ) => {
	
	const router = useHistory();
	const [categories, setCategories] = useState(getHomePageCategoriesApi());
	
	const dispatch = useDispatch();

	const navigateToProduct = (link) => {
		router.push(link);
	};
	const addtoCart = (product) => {
		const action = {type: 'ADD_TO_CART' , data: product};
		dispatch(action);
	};
	return (
		<div className='container-fluid mb-4'>
			<div className='row'>
				{categories.map((category, i) => (
					<div className='col-lg-12 mt-5' key={i}>
						<div className='card shadow'>
							<div className='card-header h3 bg-white'>{category.categoryName}</div>
							<div className='card-body'>
								<div className='row'>
									{category.products.map((product, j) => (
										<div className='col-lg-2 text-center pointer' key={j} >
											<div className='cat-single-product-img'>
												<img className='img-fluid ' src={product.image} alt='' />
											</div>
											<h6>{product.title}</h6>
											<div>
												<span className='text-center text-success'>{product.offer}</span>
												<br />
												<span className='text-muted'>{product.subText}</span>
											</div>
											<div className='add-to-wishlist' onClick={ e => addtoCart(product)}>
												{' '}
												Add to Cart
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};


export default Categories;
