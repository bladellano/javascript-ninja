var arr = [1,2,3,4,5,6,7,8];

arr.forEach(function( item, index, array ){
	// console.log(item, index, array);
});

var sum = 0;
arr.forEach(function( item, index ){
	sum += item;
});

// console.log( sum );

var every = arr.every(function(item){ //every() verifica cada item do array dentro de uma condição.
	// return item < 8;
	return item < 9;
});

// console.log(every);

var some = arr.some(function(item){ //some() se tiver pelo menos um true, ele retorna true,
	return item % 2 === 0;
});

console.log(some);
