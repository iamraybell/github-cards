class DataProvider{
	constructor(usersToLoad){
		this.userData = [];
		this.allUserNames = usersToLoad;
	}
	//adds to array when ready
	addToArray(data){
		this.userData.push(data);
		console.log(this.userData)
	}

	//this handles loading all data
	//returns all data in usersData
	getData(cb){
		let promArray = [];
		this.allUserNames.map((userName)=>{
			promArray.push(fetch(`https://api.github.com/users/${userName}`).then(res=>res.json()))
		})

		Promise.all(promArray)
			.then(data => {
		  		// do something with the data
		  		 cb(data);
			})

	}

}




export default DataProvider;