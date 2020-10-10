// Your web app's Firebase configuration
			// For Firebase JS SDK v7.20.0 and later, measurementId is optional
			var firebaseConfig = {
				apiKey: 'AIzaSyAbBhvedyUp7Q5oyx4FLh3WwvuR-cO5jpg',
				authDomain: 'movieselector-2505pj.firebaseapp.com',
				databaseURL: 'https://movieselector-2505pj.firebaseio.com',
				projectId: 'movieselector-2505pj',
				storageBucket: 'movieselector-2505pj.appspot.com',
				messagingSenderId: '39516760647',
				appId: '1:39516760647:web:3ccdc6c6dedd695b4f5f62',
				measurementId: 'G-4EDXF54DD9',
			};
			// Initialize Firebase
			firebase.initializeApp(firebaseConfig);
			firebase.analytics();

// codigo necesario para el colapsible de bootstrap
$('#myCollapsible').collapse({
	toggle: false,
});