function adder(x){
	function addOther(y){
		return x + y;
	}
	return addOther;
}

// var add2 = adder(2);
// console.log(add2);
// console.log(add2(3));
// console.log( adder(2)(3) );

var car = {
	color:'yellow'
};

function getCarColor(mycar){
	return mycar.color;
}

 console.log( getCarColor(car) );