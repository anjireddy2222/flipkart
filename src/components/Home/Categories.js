import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getHomePageCategoriesApi } from '../../apis/getHomePagecategories';

const Categories = () => {

	const history = useHistory();
	const router = useHistory();
	const [categories, setCategories] = useState(getHomePageCategoriesApi());
	

	const cartItems = useSelector((appData) => appData.cartItems);
	const wishListItems = useSelector( appData => appData.wishList);
	
	const dispatch = useDispatch();

	const navigateToProduct = (link) => {
		router.push(link);
	};

	const handleWishList = (e, product, id) => {
		try {
			// change heart icon color
			e.preventDefault();
			let parentDiv = document.getElementById(id);
			const matchedproducts = wishListItems.filter((item) => item.pid == product.pid);
			const length = matchedproducts.length;

			length == 1
				? parentDiv.setAttribute('class', 'add-to-wishlist text-secondary')
				: parentDiv.setAttribute('class', 'add-to-wishlist text-danger');
			// redux action
			const action = { type: 'ADD_TO_CART', data: product };
			dispatch(action);
		} catch (err) {
			console.log(err.message);
		}
	};

	const getClassNames = (product) =>{
		const length = wishListItems.filter((item) => item.pid == product.pid).length;
		if( length == 1){
			return "add-to-wishlist text-danger";
		}else{
			return "add-to-wishlist text-secondary";
		}
	}

	const gotoProduct = (productId) => {
		history.push('product-details?pid=' + productId);
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
										<div  key={j} className='col-lg-2 text-center pointer'  >
											<div onClick={(e) => gotoProduct(product.pid)}>
												<div className='cat-single-product-img'>
													<img className='img-fluid ' src={product.image} alt='' />
												</div>
												<h6>{product.title}</h6>
												<div>
													<span className='text-center text-success'>{product.offer}</span>
													<br />
													<span className='text-muted'>{product.subText}</span>
												</div>										
											</div>
											<div className={getClassNames(product)} id={i + 'a' + j}>
												<FontAwesomeIcon icon={faHeart} onClick={(e) => handleWishList(e, product, i + 'a' + j)} />
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			{/* <div className='row'>
				<div className='col-lg-12'>
					
					{cartItems.map((product) => (
						<h2>{product.item.title} - { product.count }</h2>
					))}
				</div>
			</div> */}
		</div>
	);
};

export default Categories;
