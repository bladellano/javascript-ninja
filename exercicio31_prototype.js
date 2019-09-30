(function(){

	'use strict';

	function MyFunction( name, lastName ){
		this.name = name;
		this.lastName = lastName;
		this.age = 30;//Sobrepõe
	}

	MyFunction.prototype.fullName = function(){
		return this.name + ' ' + this.lastName;
	}

	var fernando = new MyFunction('Fernando','Daciuk');
	
	MyFunction.prototype.age = 20;

	console.log( fernando.fullName() );
	console.log( fernando.age );


})();