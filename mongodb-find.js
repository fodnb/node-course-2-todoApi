// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')

		
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db)=>{
		if(err){
			console.log("unable to connect to mongoDB server");

		}

		console.log("connected to mongodb server")
		// console.log(db);
		// db.collection("Todos").insertOne({
		// 	text: 'Something to do',
		// 	completed: 'false'
		// }, (err, result)=>{

		// 	if(err){
		// 		return console.log('Unable to insert toDo', err);
		// 	}
		// 	console.log(JSON.stringify(result.ops, undefined, 2));
		// })

		// db.collection('Todos').find({
		// 	_id: new ObjectID('59e35d3a67405c1e05e6b500')
		// }).toArray().then((docs) => {
		// 	console.log('Todos');
		// 	console.log(JSON.stringify(docs, undefined, 2));
			
		// 	if(err){
		// 		return console.log('could not find any todos', err);
		// 	}

		// })

			db.collection('Users').find({
				name: "Adam"
			}).count().then((count)=>{
				console.log(`Todos count: ${count}`);
			}, (err) =>{
				return console.log("Unable to fetch Todos", err);
			});

		// db.collection('Users').find({
		// 	name: "Daniel"
		// }).count().then((count)=>{
		// 	console.log(count);
		// 	// console.log(JSON.stringify(count, undefined, 2));
		// });



		// db.collection('Users').insertOne({	
		// 	name: "Daniel",
		// 	age: 36,
		// 	location: "Garfield, NJ"
		// }, (err, result) => {
		// 	if(err){
		// 		return console.log('Could not add User', err);
		// 	}
		// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));

		// })

		// db.close();

})