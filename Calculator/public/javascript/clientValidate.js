/**
 * New node file
 */

var app = angular.module('myApp', []);
app.controller('calculatorClientCtrl', function($scope) {
	
	var operand1;
	var operand2;
	
	operand1 = $scope.number1;
	operand2 = $scope.number2;
	
	var result = "test";
	
	$scope.add = function(){
		
		console.log("in add function");
		if (validate() != 0)
		{
			console.log("validated");
			//make ajax call
		}
	};
	
	$scope.subtract = function(){
		
		console.log("in subtract function");
		if (validate() != 0)
		{
			console.log("validated");
			//make ajax call
		}
	};
	
	$scope.multiply = function(){
		
		console.log("in multiply function");
		if (validate() != 0)
		{
			console.log("validated");
			//make ajax call
		}
	};
	
	$scope.divide = function(){
		
		console.log("in divide function");
		if (validate() != 0)
		{
			console.log("validated");
			//make ajax call
		}
	};
	
	function validate()
	{
		//number1 = parseFloat((Document.getElementById("number1")).value);
		//number2 = parseFloat((Document.getElementById("number2")).value);

		console.log(operand1);
		console.log(operand2);

		if (isNaN(number1) || isNaN(number2))
		{
			return 0;
		}
	}
});



