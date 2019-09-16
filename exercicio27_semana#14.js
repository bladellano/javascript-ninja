(function(){

console.log('Number Objects Array:');

var numberObjects = [];

	for( var i = 1; i <= 10; i++ ){
		numberObjects.push({ number:i });
	}
console.log( numberObjects );

//------------------------------------
console.log('\nJust Numbers:');

var justNumbers = numberObjects.map(function(item){
	return item.number;
})  

console.log( justNumbers );
//------------------------------------
console.log('\nJust module of division by 2or 3:');
var justMod20Or3 = justNumbers.filter(function(item){
	return item % 2 === 0 || item % 3 === 0; 
});

console.log( justMod20Or3 );
// [ 2, 3, 4, 6, 8, 9, 10 ]

console.log('\nOperation:');

var operation = justMod20Or3.reduce( function(ac, cur){
	return ( ac + 1 ) * cur;
},0);
var arr = [1,2,3]
var operation1 = arr.reduce( function(ac, cur){
	return ( ac + 1 ) * cur;
	//(0 + 1) * 1 = 1;
	//(1 + 1) * 2 = 4;
	//(2 + 1) * 3 = 9  
	//---sem o '0'
	//(1+1) * 2 = 4;
	//(4+1) * 3 = 15;
//},0);
});


console.log( operation1 ); 
//------------------------------------
var operation2 = justMod20Or3.reduceRight( function(ac, cur){
	return ( ac + 1 ) * cur;
},0);

console.log("operation2:", operation2);

//------------------------------------
console.log('\nSeu nome na língua do "P":');

var name = ['Fer','nan','do'];

var reduceP = name.reduce(function(ac, cur){
	return ac + 'P' + cur;
},'');

console.log( reduceP );

//------------------------------------

console.log('\nInverse Name:');

var inversedName = name.reduceRight(function(ac,cur){	
	return ac + cur;
});

console.log( inversedName, name.reverse().join('') );

//------------------------------------
console.log( 'n\Number objects' );

console.log( numberObjects ); 

console.log('\nExiste um { number:2 } em numberObjects?');

var obj = numberObjects[1];

// if(numberObjects.indexOf(obj) > -1){ // Sim, existe.
if(numberObjects.indexOf({ number:2 }) > -1){ //Não existe.
	console.log( 'Sim, existe um objeto {number:2} em numberObjects' );
} else {
	console.log('Não existe um objeto {number:2} em numberObjects :(');
}
//------------------------------------

var obj = numberObjects[1]
if(numberObjects.lastIndexOf(obj,0) > -1){ //Não existe.
	console.log( 'Sim, existe um objeto {number:2} em numberObjects' );
} else {
	console.log('Não existe um objeto {number:2} em numberObjects :(');
}
//------------------------------------

console.log('\nJustMod20Or3 é um array? Se for, a representação dele em String é:');
if(Array.isArray( justMod20Or3 )){
	console.log(justMod20Or3.toString());
}

})(); //Fim