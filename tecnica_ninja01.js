(function(){

'use strict';

var arr = [1,2,3,4];
var arr1 = arr;

var arr2 = arr.map(function(item){
	return item;
});

var arr3 = arr.slice();

var $divs = document.querySelectorAll('div');
var $divsCopy = Array.prototype.slice.call($divs);

console.log($divsCopy, $divs, $divs === $divsCopy);

console.log( arr,arr1, arr === arr1 );
console.log( arr,arr2, arr === arr2 );
console.log( arr,arr3, arr === arr3 );

// Como saber o tipo de dado real de um elemento

// console.log( {prop:1, propp:2}.toString() );

var array = {};

// console.log( Object.prototype.toString.call(array) )

function is(obj){
	return Object.prototype.toString.call(obj);
}

function isArray(obj){
	return is(obj) === '[object Array]';
}

function isObject(obj){
	return is(obj) === '[object Object]';
}

function isFunction(obj){
	return is(obj) === '[object Function]';
}

console.log("isArray: ", isArray(array) );
console.log("isObject: ", isObject(array) );
console.log("isFunction: ", isFunction(array) );

})();