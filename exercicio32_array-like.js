(function(){
	'use strict';

	function myFunction1(){
		var arr = [1,2,3,4];

		arr.forEach( function(item) {
			console.log( item );
		});
	}	
	myFunction1();
	console.log('//-----------------//');
	
	function myFunction2(){
		Array.prototype.forEach.call(arguments, function(item, index){
			console.log( item );
		});
	}	
	myFunction2(1,2,3,'a','b','c',{},['true']);
	console.log('//-----------------//');


	function myFunction3(){
		var result = Array.prototype.reduce.call(arguments, function(ac, cur, index){
			return ac + cur;
		});
		console.log( result );
	}

	myFunction3(1,2,3,4,5,6,7,8);

})();