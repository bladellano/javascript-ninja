;(function(){

	var person = {
		name:'Caio',
		lastname:'Silva',
		age:34
	}

	console.log("Propriedades de \"person\":");

	console.log(Object.keys( person ));

	var books = [];

	books.push( {name:'jQuery Mobile', pages: 250} );
	books.push( {name:'Javascript de Alto Desempenho', pages: 150} );
	books.push( {name:'CSS3', pages: 280} );

	console.log('\nLista de livros:');

	// console.log( books );

	var lastBook = books.pop();

	console.log( 'Último livro: ',lastBook );

	// console.log(books);

	console.log('\nLista de livros em formato de string:\n');

	var books = JSON.stringify( books );

	// console.log(books);// Em formato de string.

	books = JSON.parse( books );//Vira um array

	// console.log( books );

	for(var i = 0; i < books.length; i++ ){
		// console.log( books[i].name, books[i].pages  );	
		for( var prop in books[i] ){

			console.log( prop, ':', books[i][prop]);
		}
		console.log("\n");
	}


var myName = [ 'D','e','l','l','a','n','o'];
console.log("myName", myName);

console.log(myName.join(''));

console.log(myName.reverse().join(''));

console.log(myName.sort()); //Ordenar alfabeticamente.

})(); 