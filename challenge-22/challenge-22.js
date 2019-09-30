(function(){
	'use strict';
	var log = console.log;

	var fernando = {
		name:'Fernando',
		lastName:'Daciuk'
	};

	var maria = {
		name: 'Maria',
		lastName:'Josefina'
	};

	log( 'O nome das pessoas é:' );

	function getFullName(){
		return this.name +' '+ this.lastName;
	}

	log( getFullName.call(fernando) );
	log( getFullName.call(maria) );


	function sum(){
		return Array.prototype.reduce.call(arguments,
			function(ac, cur){
				return Number(ac) + Number(cur);
				// return +ac + +cur;
			}
			);
	}

	/*log(sum(2,5,6,7,8,12));
	log(sum(2,533,64,73,82,12));
	log(sum(5,45,26,7,8,12));*/

	var userEntry = prompt('Entre com alguns numeros que serão somados:');

	log('\nEntrada do usuário:', userEntry);

	function justNumbers( entry ){

		return entry.replace(/\D+/g,',').split(',');
	}

	console.log('\nEntrada do usuário limpa. Somente números:');
	var numbers = justNumbers( userEntry );

	log( numbers );
	log( '\nSomar números entrados pelo usuário:' );
	log ( sum.apply(sum, numbers ) ); 


})(); 