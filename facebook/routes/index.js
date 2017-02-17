
/*
 * GET home page.
 */
var ejs = require("ejs");
var mysql = require('./mysql');

exports.index = function(req, res){
	res.render('index', { title: 'Express' });
};

function homePageRender(req,res) {

	ejs.renderFile('./views/home.html',function(err, result) {
		// render on success
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

exports.signUpProcess = function(req,res){
	console.log("Sign up server initiated!");
	console.log(req.body);
	// Create a connection with the database.
	console.log(req.body['firstname']);
	
	var query = "insert into user values " +  "('" + req.body['firstname'] + "','" + req.body['lastname'] + "','" + req.body['email'] + "','" + req.body['password'] + "');";
	console.log("Executing the query : ");
	console.log(query);
	
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
			console.log("error occured while inserting " + err.message);
		}
		else 
		{
			console.log("successfully inserted!\n");
		}  
	},query);

	// Insert the received data in to UserBasicInfo.

	// If the query was executed successfully and data was inserted return with success.

	// If there was a failure, return with error message.
}


exports.LogInProcess = function(req,res){
	console.log("Log in server initiated!");
	console.log(req.body);
	// Create a connection with the database.
	console.log(req.body['email']);
	console.log(req.body['password']);
	
	var getUser="select * from user where emailid='"+ req.body['email'] + "' and password='" + req.body['password'] +"'";
	console.log("Query is:"+getUser);
	
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0){
				console.log("valid Login");
				return;
				//home(req,res);
			}
			else {    
				
				console.log("Invalid Login");
				return;
				//home(req,res);
			}
		}  
	},getUser);

	// Insert the received data in to UserBasicInfo.

	// If the query was executed successfully and data was inserted return with success.

	// If there was a failure, return with error message.
}

exports.homePageRender = homePageRender;