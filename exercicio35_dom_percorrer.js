(function(doc){
	'use strict';

	var $main = doc.querySelector('.main');
	var $mainContent = doc.querySelector('.main-content');
	var $mainHeader = doc.querySelector('.main-header');
	var $cloneMainHeader = $mainHeader.cloneNode(true);
	var $mainFooter = doc.querySelector('.main-footer');
	var $h1 = $mainHeader.firstElementChild;

	// $main.replaceChild($cloneMainHeader, $mainFooter); Faz uma substituição.
	// $main.appendChild(newTextNode);

	var newTextNode = doc.createTextNode('Novo p!');//É um método do document.
	var $newP = document.createElement('p');
	$newP.appendChild(newTextNode);

	$main.appendChild($newP);
	
	console.log($main.id) ; //Eles são getters e setters.
	// console.log($main.className = 'otherClass' ) ;//Muda a class do elemento.
	console.log($main.getAttribute('class')); //Retorna sempre String.
	console.log($main.setAttribute('data-js','main-datajs')); //Seta um novo atribute.

	// parseFloat(s: string) //Converte para number, p/ nº decimal.
	// parseInt(s: string) //Converte para number, p/ n ºinteiro.

})(document);