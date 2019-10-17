(function(DOM){

	'use strict';

	function app(){
		return {
			init:function init(){
				console.log('app init');
				this.companyInfo();
			},
			companyInfo: function companyInfo(){
				var ajax = new XMLHttpRequest();
				ajax.open('GET','./company.json',true); //true - async
				ajax.send();
				ajax.addEventListener('readystatechange',this.getCompanyInfo,false)//false - padrão
			},
			getCompanyInfo: function getCompanyInfo(){
				// if(this.readyState === 4 && this.status === 200)
				if(app().isReady.call(this))//this = ajax do XMLHttpRequest.
					console.log(this.responseText);
			},
			isReady:function isReady(){
				return this.readyState === 4 && this.status === 200;
			} 
		};
	}//app end

	app().init();
})(window.DOM);