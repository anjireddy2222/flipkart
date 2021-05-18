
import { data } from 'jquery';
import { createStore } from 'redux';

const appData =
	localStorage.getItem('appData') == null
		? {
				cartItems: [],
				wishList: [],
				userProfie: {},
				isLoggedIn: false,
				userId: 0,
		  }
		: JSON.parse(localStorage.getItem('appData'));

const updateMyAppData = (state = appData, action) => {
	let arrayItems = [...state.cartItems];

	
	if (action.type == 'UPDATE_USER_ID') {
		state.userId = action.data;
	}

	if (action.type == 'ADD_TO_WISHLIST') {
		state.wishList.push(action.data);
	}

	if (action.type == 'ADD_TO_CART') {
		
			let isNewProduct = true;
			state.cartItems.map( product =>{
				if( product.item.pid == action.data.pid){
					product.count = product.count + 1;
					isNewProduct = false;
				}
				return product;
			});
			if( isNewProduct == true){
				state.cartItems.push({ item: action.data, count: 1 });
			}
	}

	if( action.type == "DECREASE_FROM_CART"){
		arrayItems.map((product) => {
			if (product.item.pid == action.data) {
				product.count = product.count - 1;
			}
			return product;
		});
		state.cartItems = arrayItems;
	}

	if( action.type == "INCREASE_FROM_CART"){
		arrayItems.map((product) => {
			if (product.item.pid == action.data) {
				product.count = product.count + 1;
			}
			return product;
		});
		state.cartItems = arrayItems;
	}

	if (action.type == 'REMOVE_FROM_CART') {
		state.cartItems = state.cartItems.filter((item) => item.title != action.data);
	}

	return state;
};



const store = createStore(updateMyAppData, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
	localStorage.setItem('appData', JSON.stringify(store.getState()))
});

export default store;
