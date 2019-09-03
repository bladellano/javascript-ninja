var sum = function calculateSum(x,y){
	return x + y;
};
var value1 = 10;
var value2 = 20;
console.log( 'A soma de ' +value1+ ' e '+value2+' é '+ sum( value1,value2 ) + '.' );
console.log('Nome da função é '+sum.name+'.');
function showName(){
	return 'Fernando Daciuk';
}
var varShowName = showName;

console.log('A função '+ varShowName.name +' retorna '+ varShowName() +'.')

function calculator( operator ){
	return function( number1, number2 ){
		var result;
		switch( operator ){
			case '+':
		 result = number1 + number2;
		 break;
			case '-':
		 result = number1 - number2;
			case '*':
		 result = number1 * number2;
		 break;
			case '/':
		 result = number1 / number2;
		 break;
			case '%':
		 result = number1 % number2;
		 break;
		 
		 default:
	         return 'Operação inválida.';

		}
		return 'Resultado da operação: '+number1+' '+operator+' '+number2+' = '+result+'.';
	};

}
var sum = calculator('+');

console.log(sum(7,8));

var substraction = calculator('-');
var multiplication = calculator('*');
var division = calculator('/');
var mod = calculator('%');
var qualquercoisa = calculator('x');

console.log( substraction(5,2) )
console.log( multiplication(20,8) )
console.log( division(15,3) )
console.log( mod(4,2) )
console.log( qualquercoisa(1,4) )   


