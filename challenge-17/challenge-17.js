(function(){

	'use strict';
	console.log('Chellenge 17');

	var text = 'Em algumas datas 22 de junho de 1998 as agências no 90 circulou um texto chamado "bonde amarelo" ou "metrô amarelo" sensata substituir Lorem Ipsum para dar um visual mais moderno para o conteúdo. Mas muitas pessoas estavam olhando para ler o texto quando ele estava em Francês ou Inglês, o efeito foi em 11 de julho de 1987 desejado não foi alcançado. Trabalhar com texto legível, contendo instruções em Porto Alegre pode causar distrações e isso pode ajudar a focar o layout.';

	console.log( 'Adicionando seu nome no texto:' );

// console.log( text.replace(/bonde amarelo/, 'Fernando Daciuk') );

console.log( 'Trocando a naturalidade:' );

// console.log( text.replace(/causar/g,'paranaense') );

console.log( 'n\Trocando números por -:' );
// text.match(/\d/g)  
// console.log( text.replace( /[0-9]/g,'-' ) ); 
// console.log( text.replace( /\d/g,'-' ) ); 

console.log( '\nTrocando de "D" a "h" por "0":' );

// console.log( text.replace( /[D-Hd-h]/g,'0' ) );

console.log( '\nTrocando "A" e "a" por "4":' );

// console.log( text.replace( /a/gi, 4) );

console.log( '\n"Francês ou Inglês" em caixa alta:' )

console.log( text.replace(/Francês ou Inglês/g, function(phrase){
	// return phrase.toUpperCase();
}) );


console.log( '\nMeses representados por números:' );

function getMonthNumber(monthName){
	var months = {
		janeiro:'01',
		fevereiro:'02',
		'março':'03',
		abril:'04',
		maio:'05',
		junho:'06',
		julho:'07'
	};

	return months[ monthName ]
}   

console.log('O mês fevereiro é representado pelo número '+ getMonthNumber('fevereiro') +'.');
console.log('O mês março é representado pelo número '+ getMonthNumber('março') +'.');
console.log('O mês abril é representado pelo número '+ getMonthNumber('abril') +'.');

console.log('\nReplaca de datas:');

var regexDate = /(\d\d) de (junho|julho) de (\d\d\d\d)/g;

console.log( regexDate );

function replaceDate (regex,day,month,year){
	return day + '/' + getMonthNumber( month ) + '/' + year;
}

console.log( text.replace( regexDate, replaceDate ) );

})();