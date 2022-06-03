if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
 	apiKey: "AIzaSyAmVc66lEQ_IdCT2bRPi4BoXg9-hfTxBGk",
	authDomain: "grtm-summer-camp.firebaseapp.com",
	projectId: "grtm-summer-camp",
  	databaseURL: "grtm-summer-camp-default-rtdb.europe-west1.firebasedatabase.app",
	storageBucket: "grtm-summer-camp.appspot.com",
	messagingSenderId: "871069899504",
	appId: "1:871069899504:web:17cdc36249046505220035"
});