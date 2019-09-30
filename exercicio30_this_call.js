(function(){

	'use strict';

	function myFunction(a,b,c,d){
		console.log(this.lastName,a,b,c,d);
	}

	var obj = {
		lastName:'Daciuk'
	};

	var obj2 = {
		lastName: 'Silva'
	};
	var arr = [1,2,3,4];
	// myFunction.call(obj2,22,'b','c','d');
	myFunction.call(obj,1,2,3,4);
	myFunction.apply(obj2, arr)

})();