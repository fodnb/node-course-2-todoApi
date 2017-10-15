const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db)=>{
		if(err){
			console.log("unable to connect to mongoDB server");

		}

		//deleteMany
		//deleteOne
		//fineOneAndDelete


		// db.collection("Todos").deleteMany({text: 'walk <the></the> dog'})
		// .then((result)=>{
		// 		console.log(result);
		// });

		// db.collection('Todos').deleteOne({text: "eat lunch"}).then((result)=>{
		// // 	console.log(result.result);

		// db.collection('').findOneAndDelete({completed: false}).then((result)=>{
		// 	console.log(result);
		// })


		// })



		// db.collection('Users').deleteMany({name: "Daniel"}).then((result)=>{
		// 	console.log(result);
		// });

		db.collection('Users').findOneAndDelete({_id: new ObjectID("59e35a4367405c1e05e6b392")}).then((result)=>{
			console.log(result);
		})


		// db.close();

})