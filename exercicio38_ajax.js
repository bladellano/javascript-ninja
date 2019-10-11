(function(){

    'use strict';

    var ajax = new XMLHttpRequest();
    // ajax.open('GET','exercicio38_data.json');
    ajax.open('GET','exercicio38_data.xml');
    ajax.send(); //Com conexão:1
    //status http:200,403,404,500,etc
    var response = '';

    ajax.addEventListener('readystatechange',function(){
        console.log('Carregando...');
        if(isRequestOk()) {           
            try {
                response = JSON.parse(ajax.responseText);
            } catch (e) {
                response = ajax.responseText;
            }
            // var data = JSON.parse(ajax.responseText);
            console.log(response);            
        }
    },false);

    function isRequestOk(){
        return ajax.readyState === 4 && ajax.status === 200; 
    }
})(); 