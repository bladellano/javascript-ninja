var obj = {
	x:1,
	y:2
};
// console.log("obj", obj);

var obj2 = Object.create(obj);
obj2.x = 3;
// console.log("obj2", obj2);

var obj3 = Object.create(obj2);
// console.log("obj3", obj3);

//---------------------//

// for(var prop in obj){
// for(var prop in obj2){
	for(var prop in obj3){
		console.log("prop", prop);

	}

	obj3.hasOwnProperty('x');
	// console.log("Result", obj3.hasOwnProperty('x'));

	for(var prop in obj2){
		if(obj2.hasOwnProperty(prop)){
			console.log(prop);
		}
	}