//IIFE
(function(){

	var five = Number('5');
	console.log(five+' é ńumero?',typeof five ==='number');


	var concat = String(10) + 10;
	console.log('"'+concat+'" é uma string? E é igual a "1010"?', typeof concat === 'string');

	var operation = {
		'+':function(x, y){ return x + y},
		'-':function(x, y){ return x - y},
		'*':function(x, y){ return x * y},
		'/':function(x, y){ return x / y},
		'%':function(x, y){ return x % y}
	}

function isOperatorValid( operator ){
	// return (operator === '+' || operator === '-' || operator === '*' || operator === '/' || operator === '%');
	// return operation[operator] !== undefined;
	return !!operation[operator];
}

console.log(isOperatorValid('*'));


function calculator( operator ){
	if(!isOperatorValid( operator )){
		return false;
	}
	return function(x,y){
		if(typeof x !== 'number' && typeof y !== 'number'){
			return false;
		}
		return operation[ operator ]( x,y );
	}
}

function showOperationMessage (operator, number1, number2){
	return 'A operação '+ number1 +' ' + operator + ' '+ number2 + ' =';
}

function showErrorMessage( operator ){
	return 'Operação ' + operator + ' "não permitido(a)."';
}

var number2 =0;
var operationSignal;


operationSignal = '+';
var sum = calculator(  operationSignal );


if( sum ){
	number1 = 10;
	number2 = 12;
	console.log( showOperationMessage( operationSignal, number1, number2 ), sum(number1,number2) );
} else {
	showErrorMessage(operationSignal);
	console.log( showErrorMessage(operationSignal) );
}

operationSignal = '-';
var subtraction = calculator(  operationSignal );

if( subtraction ){
	number1 = 8;
	number2 = 11;
	console.log( showOperationMessage( operationSignal, number1, number2 ), subtraction(number1,number2) );
} else {
	showErrorMessage(operationSignal);
	console.log( showErrorMessage(operationSignal) );
}


operationSignal = '*';
var multplication = calculator(  operationSignal );

if( multplication ){
	number1 = 8;
	number2 = 11;
	console.log( showOperationMessage( operationSignal, number1, number2 ), multplication(number1,number2) );
} else {
	showErrorMessage(operationSignal);
	console.log( showErrorMessage(operationSignal) );
}


operationSignal = 'lala';
var invalid = calculator(  operationSignal );

if( invalid ){
	number1 = 10;
	number2 = 11;
	console.log( showOperationMessage( operationSignal, number1, number2 ), invalid(number1,number2) );
} else {
	showErrorMessage(operationSignal);
	console.log( showErrorMessage(operationSignal) );
}


})();