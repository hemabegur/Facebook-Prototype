/**
 * New node file
 */

var _baseUrl = 'http://localhost:3000/';

var app = angular.module('myApp', []);
app.controller('initiateSignUpctrl', function($scope) {
	

	$scope.initiateSignUp = function(){
		
		console.log("client");
		alert("sign up client initiated" + $scope.firstname + $scope.lastname + $scope.email + $scope.password);
		//alert("sign up client initiated" + firstname + lastname + email + password);

		// Check the data fields and send to the server if validated.

		// Bind data in to a JSON
		
	    $.post("/signUpProcess", {"firstname": $scope.firstname, "lastname": $scope.lastname, "email": $scope.email, "password": $scope.password}, function(result){
	        console.log("Result from the post call : " + result);
	    });
	    
	    console.log("Back from POST call1\n");
	    $.post("/home", {}, function(result){
	        console.log("Result from the post call : " + result);
	    });
	    
	    console.log("Back from POST call2\n");
		
		// Send the data to the server through AJAX call.

		// if the sign up was successful, display and success and ask to login

		// If the sign up was not successful, display an error message.

	};
	
$scope.initiateLoginCtrl = function(){
		
		alert("Login client initiated" + $scope.email + $scope.password);
		
		 $.post("/LogInProcess", {"email": $scope.email, "password": $scope.password}, function(result){
		        console.log("Result from the post call : " + result);
		    });
	};
	
});









