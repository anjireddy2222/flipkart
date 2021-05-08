import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getHomePageCategoriesApi } from '../../apis/getHomePagecategories';

const Categories = () => {
	const router = useHistory();
	const [categories, setCategories] = useState(getHomePageCategoriesApi());
	console.log('categories', categories);

	const navigateToProduct = (link) => {
		router.push(link);
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
										<div className='col-lg-2 text-center pointer' onClick={(e) => navigateToProduct(product.link)}>
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
