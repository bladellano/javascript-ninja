/*var arr = [true,15,'Daciuk',function(){},{curso:'Javascript Ninja'}];

function addItem( item ){
	arr.push( item );
	return arr;
}

console.log( addItem([3,true,'Ninja']) );

console.log('O segundo elemento do segundo array é '+ arr[5][1] +' .');

console.log('O primeiro array tem '+ arr.length +' itens.');

console.log('O segundo array tem '+ arr[5].length + ' itens.');

var counter = 10;

while( counter <= 20 ){
	counter % 2 === 0 ? console.log( counter ): '';
	counter++;
}*/

/*var func = function teste(){
	return 'hi';
}

console.log( func.name );
*/

function adder(x){
	return function(y){
		return x + y;
	};
}
// var add2 = adder(2);
// console.log(add2);
// console.log( add2(3) );
console.log(adder(2)(3));