(function(){

	'use strict';

	console.log('As letras do seu nome:');

	var name = 'Fernando';

	for(var i = 0, len = name.length; i < len; i++ ){
		console.log( name[i] + ' é a ' + (i + 1) + 'ª letra do meu nome.' );
	}

	console.log('\n');
	console.log('\nNome convertido à partir de um slug:');

	var fullName = 'fernando-daciuk-terceiro-junior';

	var newFullName = fullName.split( '-' ).map(function(name){
		return name.charAt(0).toUpperCase() + name.slice(1);
	}).join(' ') ;

	console.log( fullName );
	// console.log( newFullName.join(' ') );
	console.log( newFullName );
 
	console.log('\nMeus amigos:');

	var friends = ['Paulo','Marcos','Caio','Diego', 'Felipe'];

	var phrase = friends.reduce(function(ac, cur, index){ debugger
		var separator = friends.length - 1 === index ? ' e ': ', ';
		return ac + separator + cur;
	}).concat( ' são meus amigos.');
	console.log( phrase );
})();