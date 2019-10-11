(function (win,doc) {

    'use strict';        
    
    function DOM(elements) {
        this.element = document.querySelectorAll(elements);
    }

    DOM.prototype.on = function on(eventType, callback) {
        Array.prototype.forEach.call(this.element, function (element) {
            element.addEventListener(eventType, callback, false);
        });
    };

    DOM.prototype.off = function off(eventType, callback) {
        Array.prototype.forEach.call(this.element, function (element) {
            element.removeEventListener(eventType, callback, false);
        });
    };

    DOM.prototype.get = function get() {
        return this.element;
    };

    //forEach 
    DOM.prototype.forEach = function forEach(){
        return Array.prototype.forEach.apply(this.element, arguments);
    }

    var $a = new DOM('[data-js="link"]');
    console.log($a);

    $a.forEach(function(item){
        // console.log(item);
        // firstChild = pega o filho do elemento
        // nodeValue = pega o valor do elemento filho
        console.log(item.firstChild.nodeValue);
    });

})(window,document);