import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faSearch,
  faShoppingCart,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/flipkart-logo.png";
import cookie from 'react-cookies';
import { useSelector } from "react-redux";

const TopNav = () => {
	const [uid, setUid] = useState(cookie.load('uid'));

	const noOfCartItems = useSelector( appData => appData.cartItems.length );
	
  return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light kart-nav-bar'>
			<div className='container'>
				<Link className='navbar-brand' to="/" >
					<img className='kart-logo-img' src={logo} alt='' />
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<div className='input-group kart-menu-textbox'>
						<input className='form-control border-right-0' type='search' placeholder='Search' aria-label='Search' />
						<div className='input-group-append'>
							<span className='input-group-text nav-append-white  text-primary' id='basic-addon2'>
								<FontAwesomeIcon icon={faSearch} />
							</span>
						</div>
					</div>

					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item dropdown'>
							<a className='nav-link dropdown-toggle  top-nav-link' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
								More
							</a>
							<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
								<a className='dropdown-item' href='#'>
									<FontAwesomeIcon icon={faBell} /> &nbsp; &nbsp;Notifications
								</a>
								<a className='dropdown-item' href='#'>
									<FontAwesomeIcon icon={faSuitcase} /> &nbsp; &nbsp;Sell on Flipkart
								</a>
								<a className='dropdown-item ' href='#'>
									24/7 support
								</a>
								<Link to={'/profile?uid='          +          uid}>Profile</Link>
							</div>
						</li>
						<li className='nav-item'>
							<a className='nav-link top-nav-link' href='#' tabIndex='-1' aria-disabled='true'>
								<FontAwesomeIcon icon={faShoppingCart} /> { noOfCartItems }
							</a>
						</li>
						<li className='nav-item'>
							<Link  to='/cart' className='nav-link top-nav-link'>
								Cart
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default TopNav;
