(function(){


	console.log('O array em formato de string.');

	var arr = [1,2,3,4,5];

	console.log(arr.toString());

	var sul = ['Paraná','Santa Catarina','Rio Grande do Sul'];

	var sudeste = ['Rio de Janeiro','Espírito Santo','Minas Gerais','São Paulo'];

	console.log('\nAlguns Estados do Brasil:');

	var brasil = sul.concat( sudeste );

	// console.log(brasil);

	brasil.unshift('Pará','Amapá','Amazonas');//Add no incio do array.

	// console.log(brasil);

	console.log('\nEstado removido:');

	console.log( brasil.shift() );

	console.log('Estados do sul do Brasil:');

	var newSul = brasil.slice( 2,5 );//Ñ modifica o array

	// console.log(newSul);

	console.log('Mostre todos os estados do Brasil:');

	// console.log(brasil);

	// console.log('Estados do nordeste:');

	var nordeste = [
	'Alagoas',
	'Bahia',
	'Ceará',
	'Maranhão',
	'Paraíba',
	'Pernambuco',
	'Piaui',
	'Sergipe'
	];

	// console.log(nordeste);

	var newSudeste = brasil.splice( 5, 4 );

	console.log(newSudeste, brasil);

	brasil = brasil.concat( nordeste );

	console.log('\nEstados em newSudeste');
	console.log( newSudeste );

	console.log('\nAlguns estados do Brasil:');
	console.log( brasil );

	var newBrasil = [];

	brasil.forEach(function(item, index){

		newBrasil.push({
			id:     index,
			estado: item
		});
	});

	console.log('\nNewBrasil:');

	console.log(newBrasil);


	console.log('\nTodos os estados de "brasil" tem mais de 7 letras?');

	var every = brasil.every(function(item){
		return item.length > 4;
	});

	console.log( every 
		? 'Sim, todos os estados tem mais de 7 letras' 
		: 'Nem todos os estados tem 7 letras.' );

	console.log('\nCeará está incluído em "brasil"?');
	var some = brasil.some(function(item){
		return item === 'Ceará';
	});

	console.log(
		some
		?'Ceará está incluído!'
		:'Ceará não foi incluíduo :('
		);

		var map = newBrasil.map(function(item, index){
			 item.id++;
			 item.estado += ' pertence ao Brasil';
			 return item;
		});

		// console.log( map );

		var filter = map.filter(function(item,index){
			return item.id % 2 === 0;	
		});

		console.log( filter );


})();