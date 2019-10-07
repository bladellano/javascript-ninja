(function(){

	'use strict';

	function on(element, event, callback){
		document.querySelector(element)
		.addEventListener(event,callback,false);
		//false - se propaga...
		//true - a partir do elemento pai.
	}

	function off(element,event,callback){
		document.querySelector(element)
			.removeEventListener(event,callback,false);
	}

	function handleClick(event){
		event.preventDefault();
		alert('Clicou no a');
	}

	on('[data-js="link"]','click',handleClick);//atribui evento
	off('[data-js="link"]','click',handleClick);//retira evento

	on('[data-js="div"]','click',function(){
		alert('Clicou na div');
	});

	on('[data-js="span"]','click',function(){
		alert('Clicou no span');
	});

	// on('[data-js="input"]','keydown',function(e){
	// on('[data-js="input"]','keyup',function(e){
	on('[data-js="input"]','input',function(e){
		console.log(this.value);
	});

	on('[data-js="select"]','input',function(){
		document.querySelector('[data-js="input"]').value = this.value;
	})

})();