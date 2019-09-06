(function() {

	function calculator(num1, num2){
		return function (callback){
			return callback(num1, num2);
		}
	}

	var sum = calculator( 10,2 );

	console.log('O resultado da soma é:');

	console.log( sum(function(number1,number2){
		return number1 + number2;
	}) );

	var subtraction = calculator(5,2);
	var multiplication = calculator(3,3);
	var division = calculator(100,12);
	var mod = calculator(50,32);

	console.log('O resultado da subtração é:');
	console.log(
		subtraction(function(number1,number2){
			return number1 - number2;
		}) );
	

})();



