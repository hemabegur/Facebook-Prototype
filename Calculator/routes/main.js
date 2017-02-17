
var ejs = require("ejs");
var express = require("express");

function renderCalciUI(req,res)
{
	ejs.renderFile('./views/calculatorUI.ejs', function(err,result){
		if (!err) {
			res.end(result);
		}
		// render or error
		else {
			res.end('An error occurred');
			console.log(err);
		}
	});
}

exports.add = function(req,res){
	console.log("Server initiated!");
	console.log(req.body);
	// Create a connection with the database.
	console.log(req.body['operand1']);
	console.log(req.body['operand2']);
	
	var no1 = parseInt(req.body['operand1'],10);
	var no2 = parseInt(req.body['operand2'],10);
	
	var result = no1 + "+" + no2 + "=" + (no1+no2);
	res.send(result);
		
}


exports.subtract = function(req,res){
	console.log("Server initiated!");
	console.log(req.body);
	// Create a connection with the database.
	console.log(req.body['operand1']);
	console.log(req.body['operand2']);
	
	var no1 = parseInt(req.body['operand1'],10);
	var no2 = parseInt(req.body['operand2'],10);
	var result = no1 + "-" + no2 + "=" + (no1-no2);
	res.send(result);
}

exports.multiply = function(req,res){
	console.log("Server initiated!");
	console.log(req.body);
	// Create a connection with the database.
	console.log(req.body['operand1']);
	console.log(req.body['operand2']);
	
	var no1 = parseInt(req.body['operand1'],10);
	var no2 = parseInt(req.body['operand2'],10);
	
	var result = no1 + "*" + no2 + "=" + (no1*no2);
	res.send(result);
}

exports.divide = function(req,res){
	console.log("Server initiated!");
	console.log(req.body);
	// Create a connection with the database.
	console.log(req.body['operand1']);
	console.log(req.body['operand2']);
	
	var no1 = parseInt(req.body['operand1'],10);
	var no2 = parseInt(req.body['operand2'],10);
	
	if (no2 == 0){
		res.send("Divide by zerro error");
	}
	else{
		var result = no1 + "/" + no2 + "=" + (no1/no2);
		res.send(result);
	}
		
}

exports.renderCalciUI = renderCalciUI;

