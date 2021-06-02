// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

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

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
	console.log('Received background message ', payload);

	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
	};

	self.registration.showNotification(notificationTitle, notificationOptions);
});
