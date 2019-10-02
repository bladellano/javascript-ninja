
//Wrapper objects
var name = 'Daciuk';

name.length;
console.log("Tamanho: ", name.length);

// new String; Number e Boolean
var name1 = new String('Caio');
console.log("name1: ", name1.valueOf());

var age = new Number(30);
age.valueOf()
console.log("'age.valueOf()'", age.valueOf());

// operador unario
// typeof

console.log("'typeof undefined'", typeof undefined); 
console.log("'typeof {}'", typeof {}); 
console.log("'typeof []'", typeof []); 
console.log("'typeof null'", typeof null); 

function subtract (num1, num2){
	if(typeof num1 === 'number' && typeof num2 === 'number'){
		return num1 - num2;
	}
	return 'Entre com dois números';
}

console.log( subtract(10,2) );
console.log( subtract('JS', 2) );
console.log( subtract({}, []) );

function subtract_(num1,num2){
	if( num1===null ){
		return 'Não entre com valores nulos!';
	}
	return num1 - num2;
}

 
console.log("subtract_()", subtract_(null,10));