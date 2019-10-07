(function(doc){
	'use strict';

	// var $main = doc.querySelector('.main');
	var $main = doc.querySelector('.main-content');

	// console.log($main.parentNode);//body
	// console.log($main.childNodes);//filhos...
	// console.log($main.firstChild);//primeiro filho...
	// console.log($main.lastChild);//último filho...
	// console.log($main.nextSibling);//quem é o irmão depois...
	// console.log($main.previousSibling);//quem é o irmão antes...
	// console.log($main.firstChild.nodeValue);//pega o conteudo do primeiro filho de main.
	// console.log($main.childNodes);//pega nós filhos de main.
	// console.log($main.firstChild.nextSibling.nodeValue);//pega nós filhos de main.
	// console.log($main.firstChild.nextSibling.nodeName);//nome do nó.
	// console.log($main.childNodes);//nome do nó.
	// console.log($main.children);//somente nós HTML.
	// console.log($main.firstElementChild);//somente nós HTML primeiro.
	// console.log($main.lastElementChild);//somente nós HTML útilmo.
	// console.log($main.nextElementSibling);//somente nós HTML depois.
	// console.log($main.previousElementSibling);//somente nós HTML antes.
	// console.log($main.childElementCount);//somente nós HTML em quantidade.
	// console.log($main.children.length);//mesma coisa de cima.

	// Verifica se tem o atributo class
	// console.log($main.hasAttribute('class')); //return Boolean
	// console.log($main.hasAttribute('data-js')); //return Boolean

	// hasAttribute()// verifica se tem determinado atributo, retorna true||false.
	// console.log($main.firstElementChild.firstElementChild.hasAttributes()); //verifica se tem qualquer atributo
	// has = ter

var $mainContent = doc.querySelector('.main-content');
var $mainHeader = doc.querySelector('.main-header');

// $mainContent.appendChild($mainHeader); //Insere dentro do elemento no final.

var $firstText = $mainContent.firstChild;
// $mainContent.insertBefore($mainHeader, $firstText); 

var $cloneMainHeader = $mainHeader.cloneNode(true);
$mainContent.appendChild($cloneMainHeader);

// console.log( doc.querySelectorAll('.main-header').length );
var $h1 = $mainHeader.firstElementChild;
// .hasChildNodes() //verifica se o element tem nó de texto.

$mainHeader.removeChild($h1);//remove o elemento.

})(document);