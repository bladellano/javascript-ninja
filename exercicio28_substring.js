 (function(){

 	'use strict';

 	var fer = 'Fernando';

 	fer.toLowerCase();
 	console.log("fer.toLowerCase():", fer.toLowerCase());

 	fer.toUpperCase();
 	console.log("fer.toUpperCase():", fer.toUpperCase());

 	var newFer = fer.charAt(0).toUpperCase() + fer.slice(1);
 	console.log("newFer:", newFer);

 })();