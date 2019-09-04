function sum(){
return 1 + 2;
}
console.log( sum() );

var sum2 = function(){
	return 3 + 2;
};

console.log( sum() );

var sum3 = function otherSum(){
	return 5 + 8;
};

console.log( sum3() );
//console.log( otherSum() );

var obj = {
	prop: function(){
	return 1 + 2;
	}
};

console.log(obj);
console.log( obj.prop() );

(function(){
 console.log( 1 + 4 );
})();



