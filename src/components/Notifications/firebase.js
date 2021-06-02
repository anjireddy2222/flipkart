import firebase from 'firebase';
import { updateNotificationToken } from '../../apis/updateNotificationToken';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyB_-ebEPfLMv9wcoh-Gq6t8ctVgjK7uZE8',
	authDomain: 'reacts2-95281.firebaseapp.com',
	projectId: 'reacts2-95281',
	storageBucket: 'reacts2-95281.appspot.com',
	messagingSenderId: '857935217954',
	appId: '1:857935217954:web:8f8751772484a7f426917b',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

export const onMessageListener = () =>
	new Promise((resolve) => {
		messaging.onMessage((payload) => {
			resolve(payload);
		});
	});

export const getToken = () => {
	return messaging
		.getToken({
			vapidKey: 'BPwPVln5tQewSG37F9rVPbtwhbCeMbW73KS9amcTQQF_6R3auRquPa8DTeXX_UOtPrNQH-N2Lxr7GuNMNnBD5jI',
		})
		.then((currentToken) => {
			if (currentToken) {
				console.log('current token for client: ', currentToken);
				localStorage.setItem('notificationToken', currentToken);
				//updateNotificationToken();
				// Track the token -> client mapping, by sending to backend server
				// show on the UI that permission is secured
			} else {
				console.log('No registration token available. Request permission to generate one.');
				// shows on the UI that permission is required
			}
		})
		.catch((err) => {
			console.log('An error occurred while retrieving token. ', err);
			// catch error while creating client token
		});
};
