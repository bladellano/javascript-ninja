(function(){

	var log = console.log;

	'use strict';

	log('Regex para números usando o construtor:' );

	var justNumbersRegex = new RegExp('^\\d+','gm');

	log(justNumbersRegex);

	var text = '10 anos.\n50 discos vendidos.\nE nem 10% dos meus amigos o conhece.';
	log('\nNúmeros no início da linha do texto:\n' + text, '\n');

	log( text.match( justNumbersRegex ) );

	log( '\nRegex para números somente no final das linhas:' );

	var numbersAtTheEnd = /\d+$/gm;

	log( numbersAtTheEnd );

	var otherText = 'Silvio Santos, nome artístico de Senor 12\n de dezembro de 1930, é um apresentador de televisão e empresário.\n Proprietário do Grupo Silvio Santos, que inclui empresas desde 1989\n Capitalização...';

	log( '\nNúmeros no final da linha: \n\n', otherText, '\n' );

	log( otherText.match( numbersAtTheEnd ) );

	var markup = '<main>\n <div class="container">\n <span class="text date"></span>\n <p class=\'excerpt\'></p>\n </div>\n</main>';

	console.log('\nQuais classes CSS existem na marcação abaixo?\n\n', markup,'\n');

	function hasClass(markup, cssClass){
		var regex = new RegExp('class=["\'](?:[\\w\\s]+)?' + cssClass + '(?:[\\w\\s]+)?[\'"]');
		return regex.test( markup );
	}

	var classes = ['container','text','date','excerpt','main'];

	classes.forEach(function(nameClass){
		console.log( hasClass( markup, nameClass ) + ' para a classe ' + nameClass );
	});

})();