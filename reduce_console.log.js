(function(){
	'use strict';

/*	function sum(){
		return Array.prototype.reduce.call(arguments, function(acc,cur){
			return acc + cur;
		});
	}

console.log( sum(1,21,32,4) );*/


/*console.time('Calculando tempo do for');

for(var i =0; i<100;i++){
	console.log('calculando...');
}
console.timeEnd('Calculando tempo do for');
*/


var arr = [
	{item:'Arroz',price:'R$ 10'},
	{item:'Feijão',price:'R$ 8'},
	{item:'Açucar',price:'R$ 7'},
	{item:'Leite',price:'R$ 5'},
	{item:'Danone',price:'R$ 2'}
];

console.table( arr );

})();