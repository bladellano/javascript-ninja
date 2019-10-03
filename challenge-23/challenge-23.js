(function(win,doc){

	'use strict';

	var $visor = doc.querySelector('[data-js="visor"]');
	var $buttonsNumber = doc.querySelectorAll('[data-js="button-number"]');
	var $buttonCE = doc.querySelector( '[data-js="button-ce"]');
	var $buttonOperations = doc.querySelectorAll('[data-js="button-operation"]');
	var $buttonEqual = doc.querySelector('[data-js="button-equal"]');
/*
	$buttonsNumber.forEach(function(button){ //Também funcionou!!

		console.log(button);
	});*/

	// Array.prototype.forEach.call( $buttonsNumber, function(button){
		function initialize(){
			iniEvents();
		}

		function iniEvents(){
			[].forEach.call( $buttonsNumber, function(button){
				button.addEventListener('click',handleClickNumber,false);
			});
			[].forEach.call( $buttonOperations, function(button){
				button.addEventListener('click',handleClickOperation,false);
			});
			$buttonCE.addEventListener('click',handleClickCE, false);
			$buttonEqual.addEventListener('click',handleClickEqual, false);

		}

		function handleClickNumber(){
			$visor.value += this.value;
		}

		function handleClickOperation(){
			$visor.value = removeLastItemIfIfIsAnOperator($visor.value);
			$visor.value += this.value;
		}

		function handleClickCE(){
			$visor.value = 0;
		}

		function isLastItemAnOperation(number){
			var operations = getOperations();
			var lastItem = number.split('').pop();
			return operations.some(function(operator){
				return operator === lastItem;
			});  
		}

		function getOperations(){
			return Array.prototype.map.call($buttonOperations, function(button){
				return button.value;
			});
		}

		function removeLastItemIfIfIsAnOperator(string){
			if(isLastItemAnOperation(string))
				return string.slice(0,-1);
			return string;
		}

		function handleClickEqual(){
			$visor.value = removeLastItemIfIfIsAnOperator($visor.value);
			var allValues = $visor.value.match(getRegexOperations());
			$visor.value = allValues.reduce(calculateAllValues);
		}

		function getRegexOperations(){
			return new RegExp('\\d+['+ getOperations().join('') +']?','g');
		}

		function calculateAllValues(acc,cur){
			var firstValue = acc.slice(0,-1);
			var operator = acc.split('').pop();
			var lastValue = removeLastItemIfIfIsAnOperator(cur);
			var lastOperator = getLastOperator(cur);
			return doOperation(operator, firstValue, lastValue) + lastOperator;
			
		}

		function getLastOperator(value){
			return isLastItemAnOperation(value) ? value.split('').pop() : '';
		}

		function doOperation(operator,firstValue, lastValue){
			switch (operator) {
				case '+':
				  return Number(firstValue) + Number(lastValue);
				case '-':
				  return Number(firstValue) - Number(lastValue);
				case 'x':
				  return Number(firstValue) * Number(lastValue);
				case '÷':
				  return Number(firstValue) / Number(lastValue); 	 	
			}
		}

		initialize();

	})(window,document);