(function(win,doc){
	'use strict';

	//Criando uma função construtora
	function DOM(elements){
		this.element = document.querySelectorAll(elements);
	}

	DOM.prototype.on = function on(eventType,callback){
		Array.prototype.forEach.call(this.element, function(element){
			element.addEventListener(eventType,callback,false);		
		});
	};

	DOM.prototype.off = function off(eventType,callback){
		Array.prototype.forEach.call(this.element, function(element){
			element.removeEventListener(eventType,callback,false);		
		});
	};

	DOM.prototype.get = function get(){
		return this.element;
	};

	var $a = new DOM('[data-js="link"]');

	$a.on('click',function handleClick(e){
		e.preventDefault();
		console.log('Clicou');
		$a.off('click',handleClick);//Removeu a função de click;
	});

	console.log('Elementos selecionados:', $a.get());

	console.log('$a é filho de body?',$a.get()[0].parentNode === document.body);

})(window,document);