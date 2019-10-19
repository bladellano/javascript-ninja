(function($){

	'use strict';

	var app = (function appController(){
		return {
			init:function init(){
				console.log('app init');
				this.companyInfo();
				this.iniEvents();
			},
			iniEvents: function iniEvents(){
				$('[data-js="form-register"]').on('submit',this.handleSubmit);
			},
			handleSubmit: function handleSubmit(e){
				e.preventDefault();
				console.log('submit')
				var $tableCar = $('[data-js="table-car"]').get();
				// $tableCar.appendChild(this.createNewCar());
				$tableCar.appendChild(app.createNewCar());
			},
			createNewCar: function createNewCar(){
				// return document.createTextNode('Buh');
				var $fragment = document.createDocumentFragment();//Criar tr
				var $tr = document.createElement('tr');

				var $tdImage = document.createElement('td');
					var $image = document.createElement('img');
				var $tdBrand = document.createElement('td');
				var $tdYear = document.createElement('td');
				var $tdPlate = document.createElement('td');
				var $tdColor = document.createElement('td');

					$image.setAttribute('src',$('[data-js="image"]').get().value);
					$tdImage.appendChild($image);

				$tdBrand.textContent = $('[data-js="brand-model"]').get().value;
				$tdYear.textContent = $('[data-js="year"]').get().value;
				$tdPlate.textContent = $('[data-js="plate"]').get().value;
				$tdColor.textContent = $('[data-js="color"]').get().value;

				$tr.appendChild($tdImage);
				$tr.appendChild($tdBrand);
				$tr.appendChild($tdYear);
				$tr.appendChild($tdPlate);
				$tr.appendChild($tdColor);

				return $fragment.appendChild($tr);

			},
			companyInfo: function companyInfo(){
				var ajax = new XMLHttpRequest();
				ajax.open('GET','./company.json',true); //true - async
				ajax.send();
				ajax.addEventListener('readystatechange',this.getCompanyInfo,false)//false - padrão
			},
			getCompanyInfo: function getCompanyInfo(){
				// if(this.readyState === 4 && this.status === 200)
				if(!app.isReady.call(this))//this = ajax do XMLHttpRequest.
					return;
				var data = JSON.parse(this.responseText);
				var $companyName = $('[data-js="company-name"]').get();
				var $companyPhone = $('[data-js="company-phone"]').get();

				$companyName.textContent = data.name;
				$companyPhone.textContent = data.phone;
			},
			isReady:function isReady(){
				return this.readyState === 4 && this.status === 200;
			} 
		};
	})();//app end

	// app().init();
	app.init();

	// console.log([] instanceof Object);
	DOM('input');

})(window.DOM);