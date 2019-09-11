(function(){

	var once = false;

	do {
	// console.log('Entrou ao menos uma vez!');
} while( once );


var person = {

	name:'Fernando Daciuk',
	age:30,
	weight:85,
	birthday:'14/10'
};

var counter = 0;

for( let prop in person){
	console.log('The ' + prop + 'of person is '  + person[prop]); 
	counter++;
}

console.log('The person has '+ counter +' properties');


function moreThan( age ){

	return person.age > age;
	// return person.age > 25 ? true : false;
	/*if(person.age > 25){
		return true;
	}

	return false;*/
}


console.log('The person has more than 25 yeras old?', moreThan(25));

console.log('De 0 a 10:');

var numbers = [];

for(var i = 0; i < 20; i++){

	if(i > 10){
		break;
	}
	numbers.push( i );
}
console.log(numbers);


console.log('Impares:');

numbers = [];

for(var i = 0; i <= 20; i++){

	if(i % 2 === 0){
		continue;
	}
	numbers.push(i);
}
console.log(numbers);

})();//Fim
