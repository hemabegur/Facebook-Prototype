var mongo = require('./mongoDB');

function handle_request(msg, callback){
	
	var res = {};
	console.log("In handle request:"+ msg.username);
	
	if (mongo.findUser() == 1){
		res.code = "200";
		res.value = "Succes Login";
	}
	else if (findUser() == 0){
		res.code = "401";
		res.value = "Failed Login";		
	}
/*	if(msg.username == "test@email.com" && msg.password =="test"){
		res.code = "200";
		res.value = "Succes Login";
		
	}
	else{
		res.code = "401";
		res.value = "Failed Login";
	}*/
	console.log("after connecting to mongo");
	callback(null, res);
}


function handle_request_signup(msg, callback){
	
	var res = {};
	console.log("In handle request:"+ msg.username);
	
	if (mongo.connectToMongoDB(msg) != -1 ){
		res.code = "200";
		res.value = "Successfully written details to database";
		callback(null, res);
	}
	else{
		res.code = "401";
		res.value = "Failed to write details to database";
	}
	
}

exports.handle_request_signup = handle_request_signup;
exports.handle_request = handle_request;