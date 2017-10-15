// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')


// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db)=>{
		if(err){
			console.log("unable to connect to mongoDB server");

		}

		console.log("connected to mongodb server")

		// db.collection("Todo's").insertOne({
		// 	text: 'Something to do',
		// 	completed: 'false'
		// }, (err, result)=>{

		// 	if(err){
		// 		return console.log('Unable to insert toDo', err);
		// 	}
		// 	console.log(JSON.stringify(result.ops, undefined, 2));
		// })



		db.collection('Users').insertOne({	
			name: "Daniel",
			age: 36,
			location: "Garfield, NJ"
		}, (err, result) => {
			if(err){
				return console.log('Could not add User', err);
			}
			console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));

		})

		db.close();

})