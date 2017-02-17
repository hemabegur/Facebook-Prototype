/**
 * New node file
 */

//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;
var dbGlobal;
//Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/test';

function connectToMongoDB(msg){
	// Use connect method to connect to the Server
	MongoClient.connect(url, function (err, db) {
		dbGlobal = db;
		if (err) {
			console.log('Unable to connect to the mongoDB server. Error:', err);
			return -1;
		} else {
			
			//HURRAY!! We are connected. :)
			console.log('Connection established to', url);

			// do some work here with the database.

			var userCollection = db.collection('users');

			var user = {fname: msg.Firstname, lname: msg.Lastname, email: msg.email, password: msg.password};

			userCollection.insert([user], function (err, result) {
				if (err) {
					console.log(err);
					return -1;
				} else {
					console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
				}
			});
		}
	});
}

function findUser(){
	console.log("trying to connect to mongo and finding user");
	userCollection.find().toArray(function (err, result) {
		console.log("trying to connect to mongo and returned from mongo query finding user");
		if (err) {
			console.log(err);
			return -1;
		} else if (result.length) {
			console.log('Found:', result);
			return 1;
		} else {
			return 0;
			console.log('No document(s) found with defined "find" criteria!');
		}
		//Close connection
		db.close();
		alert("Inserted successfully!");
	});
}
exports.findUser = findUser;
exports.connectToMongoDB = connectToMongoDB;