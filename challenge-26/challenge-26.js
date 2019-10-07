(function(){
	'use strict';

	function DOM(){
		
	}

	var $a = new DOM('[data-js="link"]');

	$a.on('click',function(e){
		e.preventDefault();
		console.log('clicou');
	});

	console.log('Elementos selecionados:', $a.get());

	console.log('$a é filho de body?',$a.get()[0].parentNode === document.body);



})();