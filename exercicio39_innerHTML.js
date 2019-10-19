(function(){
	
	'use strict';

	var $div = document.querySelector('[data-js="main"]');

	// console.log(typeof $div);
	// console.log( Object.prototype.toString.call($div) );
	// console.log(typeof $div.innerHTML );
	// console.log( $div.innerHTML );//getter
	// $div.innerHTML += '<h2>Título 2</h2>';
	// $div.textContent = '<h2>Título 2</h2>';
	var $textarea = document.querySelector('[data-js="textarea"]');
	var $form = document.querySelector('[data-js="form"]');

	$form.addEventListener('submit',function(e){
		e.preventDefault();
		$div.innerHTML = $textarea.value;
	},false)


})();