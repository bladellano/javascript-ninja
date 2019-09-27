var counter = 1;

/*while(counter < 10){
	console.log(counter++);
}*/

/*do {

	console.log(counter++);

} while( counter < 10 );*/

var car = {
	brand : 'BMW',
	model:'Gol',
	year:2013
};

for( var prop in car){
	// console.log( prop );
	// console.log( car[prop] );
} 

// console.log('brand i car?','brand' in car);


for (var i = 0; i < 10; i++) {
	
	if(i === 5){
		// break;
		continue;
	}

	console.log( i );
}

console.log('fim do for');