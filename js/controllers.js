'use strict';

/* Controllers */

var app = angular.module('HackApp.controllers', []);

app.controller('AuthController', ['$scope', '$location', '$firebase', '$firebaseSimpleLogin', 'FIREBASE_URL', function($scope, $location,$firebase, $firebaseSimpleLogin, FIREBASE_URL){
	var ref = new Firebase(FIREBASE_URL);

	var currentUser = '';

	var auth = new FirebaseSimpleLogin(ref, function(error, user) {
		if (error) {
  		console.log(error);
  		alert('An error occurred while trying to log you in.' + error);
		} else if (user) {
  		// user authenticated with Firebase
  		console.log(user);
  		console.log('Name: ' + user.displayName + ', email: ' + user.thirdPartyUserData.email);
  		currentUser = user;
		} else {
		}
  });

	console.log("testing: " + currentUser + currentUser + " test");

  if (currentUser === '') {
		$location.path('/home');
	};

	$scope.fbLogin = function() {
		auth.login("facebook", {
			rememberMe: true,
			preferRedirect: true,
			scope: 'email'
		});
	};

	$scope.fbLogout = function() {
		auth.logout();
		//ref.unauth();
		currentUser = '';
		$location.path('/');
	};

}]);

app.controller('HomeController', ['$scope', 'FIREBASE_URL', function($scope, FIREBASE_URL){

}]);

app.controller('CokeController', ['$scope', 'FIREBASE_URL', function($scope, FIREBASE_URL){

}]);

