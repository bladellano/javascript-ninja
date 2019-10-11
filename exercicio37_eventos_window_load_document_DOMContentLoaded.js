(function(win,doc){
    'use strict';

    var $div = doc.querySelector('[id="id-main"]');
    console.log($div.id);
    console.log($div.className);

    function afterDomContentLoaded(){

        alert('DOMContentLoaded');

        var fragment = doc.createDocumentFragment();
        var fragment = doc.createDocumentFragment();
        var chilP = doc.createElement('p');
        var textChilP = doc.createTextNode('Texto da tag P!');

        chilP.appendChild(textChilP);
        fragment.appendChild(chilP);

        doc.body.appendChild(fragment);
    }


    function afterWindowLoad(){
        alert('AfterWindowLoad');

    }


    doc.addEventListener('DOMContentLoaded',afterDomContentLoaded,false);//Executa antes de qualquer coisa se executada.

    win.addEventListener('load',afterWindowLoad,false);//Executa depois de tudo que estiver carregado



})(window,document);