/**
 * New node file
 */

var app = angular.module('myApp', []);
var globalResult ;
var _baseUrl = 'http://localhost:2000/';

app.controller('calculatorClientCtrl', function($scope) {

	var operand1;
	var operand2;

	$scope.result = globalResult;

	$scope.add = function(){

		console.log("in add function");
		if (validate() != 0)
		{
			console.log("validated");
			$scope.result = "";
			
			callServer("add", function(result){
				globalResult = result;
				console.log("completed post call " + result);
			});
			$scope.result = globalResult;
			//make ajax call
		}
		else{
			$scope.result = "Enter a valid number";
		}
	};

	$scope.subtract = function(){

		console.log("in subtract function");

		if (validate() != 0)
		{
			console.log("validated");
			$scope.result = "";

			callServer("subtract", function(result){
				globalResult = result;
				console.log("completed post call" + result);
			});
			$scope.result = globalResult;
			//make ajax call
		}
		else{
			$scope.result = "Enter a valid number";
		}
	};

	$scope.multiply = function(){

		console.log("in multiply function");
		if (validate() != 0)
		{
			console.log("validated");
			$scope.result = "";
			
			callServer("multiply", function(result){
				globalResult = result;
				console.log("completed post call" + result);
			});
			$scope.result = globalResult;
			//make ajax call
		}		
		else{
			$scope.result = "Enter a valid number";
		}
	};

	$scope.divide = function(){

		console.log("in divide function");
		if (validate() != 0)
		{
			console.log("validated");
			$scope.result = "";
			
			callServer("divide", function(result){
				globalResult = result;
				console.log("completed post call" + result);
			});
			$scope.result = globalResult;
			//make ajax call
		}
		else{
			$scope.result = "Enter a valid number";
		}
	
	};

	function validate()
	{
		operand1 = $scope.number1;
		operand2 = $scope.number2;

		console.log(operand1);
		console.log(operand2);

		if (isNaN(operand1) || isNaN(operand2))
		{
			return 0;
		}
	}

	function callServer(operationType, _callBackFn){
		
		$.ajax({
	        url:_baseUrl + operationType,
	        type:'POST',
	        data:({"operand1": $scope.number1, "operand2": $scope.number2}),
	        success: function(result){
				console.log("Result from the post call : " + result);
				_callBackFn(result);
			},
			async:false		
	    });
		
		
		/*var res = ($.post(operationType, {"operand1": $scope.number1, "operand2": $scope.number2}, function(result){
			console.log("Result from the post call : " + result);
			_callBackFn(result);
		}));
		console.log("result = 	" + res);*/
	}
});



