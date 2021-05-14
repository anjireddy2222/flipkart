// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import { createStore } from 'redux';

const appData = {
	cartItems: [],
	wishList: [],
	userProfie: {},
	isLoggedIn: false,
	userId: 0,
};

const updateMyAppData = (state = appData, action) => {
	if (action.type == 'UPDATE_USER_ID') {
		state.userId = action.data;
	}

	if (action.type == 'ADD_TO_WISHLIST') {
		state.wishList.push(action.data);
	}

	if (action.type == 'ADD_TO_CART') {
		state.cartItems.push(action.data);
	}

	if (action.type == 'REMOVE_FROM_CART') {
		state.cartItems = state.cartItems.filter((item) => item.title != action.data);
	}

	return state;
};

const store = createStore(updateMyAppData, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
