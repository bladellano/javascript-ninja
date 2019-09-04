
var myarray = [10,'Daciuk',null, {a:1},function(){}];
//console.log(myarray);

var myFunction = function (arr){	
	return arr;	
	};
//console.log(myFunction(myarray)[1]);
function myFunction2( arr,index ){
	return arr[ index ];
	}

var myarray2 = ['Ninja',52.4,true,[1,2,'Daciuk'],{b:2}];

//console.log(myFunction2(myarray2, 0));
//console.log(myFunction2(myarray2, 1));
//console.log(myFunction2(myarray2, 2));
//console.log(myFunction2(myarray2, 3));
//console.log(myFunction2(myarray2, 4));

function myFunc(x){
	switch(x){
		case 1:
		console.log('x eh 1');
		break;
		
		case 2:
		console.log('x eh 2');
		break;
		
		default:
		console.log('x não eh 1 e nem 2');
		break;
		}
	}
//myFunc(2);

//var counter = 0;

/*while(counter < 10){
	console.log(counter);
	counter++
	}*/
	
	/*var counter = 10;
	
	while(counter--){
		console.log(counter);
		}*/
		
var teams = ['São Paulo','Palmeiras','Santos','Corinthians','Ponte Preta'];	

//console.log('Times que estão participando do campeonato:'+teams);		
		
function showTeamPosition(position){
	if(position < 1 || position > 5){
		return 'Não temos a informação do time que está nesta posição';
		}
	return 'O time que estão em ' + position + 'º lugar é o ' + teams[ position - 1 ] + ' .'; 
	}		
		
	
/*console.log(showTeamPosition(1));		
console.log(showTeamPosition(3));		
console.log(showTeamPosition(2));		
console.log(showTeamPosition(5));		
console.log(showTeamPosition(8));	*/	

/*var num = 20;

while(num <= 30){
	console.log(num++);
	}		*/

function convertToHex( color ){
	var hexa;
	switch( color ){
		case 'red':
			hexa = '#FF0000';
			break;
		case 'blue':
			hexa = '#0000FF';
			break;
		case 'green':
			hexa = '#00FF00';
			break;
		case 'black':
			hexa = '#000000';
			break;
		case 'white':
			hexa = '#FFFFFF';
			break;
		default:
		return 'Não temos o equivalente hexadecimal para '+ color +'.';
		}
		return 'O hexadecimal para a cor '+ color + ' é ' + hexa + '.';
	}	
		
/*console.log( convertToHex('red') );		
console.log( convertToHex('blue') );		
console.log( convertToHex('green') );		
console.log( convertToHex('black') );		
console.log( convertToHex('white') );		
console.log( convertToHex('purple') );		
console.log( convertToHex('cyan') );		
console.log( convertToHex('magenta') );	*/

/*
var num = 0;

while(num <= 20){
	(num) % 2 === 0 ? console.log(num):'';
	num++
	}
*/


 
var arr = ['Daciuk', null, true, {bola:'azul'},function(){}];
var tam = arr.length;

//console.log(tam); 

/*
while(tam >= 0){
	console.log(arr[--tam])
	}
*/
while (tam > 0){
	console.log( arr[--tam] );
	if(tam === 3){
		console.log( arr[ tam ].bola );
		}
	}













	
		
		
		
		
		
		
		
		
