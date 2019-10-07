let log = console.log;

(function(){

	var myObject = {
		myProperty: 1,
		init: function init(){
			return this.myProperty;
		}
	}; 

	log(myObject.init());

	function myFunction(){
		return this;
	}

	log(myFunction());

	function MyConstructor(){
		this.prop1 = 'Lorem ipsum';
		this.prop2 = '3.455,00';

	}

	var constructor = new MyConstructor();

	log('MyConstructor', constructor);
	// log('MyConstructor:', MyConstructor());
	// log(prop1);

})();

