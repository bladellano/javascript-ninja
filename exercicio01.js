
var arr = ['Daciuk',null, true,{bola:'azul'},function(){}];
// console.log(arr.length);
var qtd = arr.length;
// while(qtd > 0){
	// console.log(arr[ --qtd ]);
// }

arr.push({carro:'BMW'},['la1','la2','la3']);

arr.push(function soma(x,y){return x+y;});

console.log(arr[7](1,2));