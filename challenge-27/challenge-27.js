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

    DOM.prototype.forEach = function forEach(){
        return Array.prototype.forEach.apply(this.element, arguments);
    };

    DOM.prototype.map = function map(){
        return Array.prototype.map.apply(this.element, arguments);
    };

    DOM.prototype.filter = function filter(){
        return Array.prototype.filter.apply(this.element, arguments);
    };

    DOM.prototype.reduce = function reduce(){
        return Array.prototype.reduce.apply(this.element, arguments);
    };

    DOM.prototype.reduceRight = function reduceRight(){
        return Array.prototype.reduceRight.apply(this.element, arguments);
    };

    DOM.prototype.every = function every(){
        return Array.prototype.every.apply(this.element, arguments);
    };

    DOM.prototype.some = function some(){
        return Array.prototype.some.apply(this.element, arguments);
    };

        DOM.prototype.isArray = function isArray( param ){
            return Object.prototype.toString.call( param ) === '[object Array]';
        }

        DOM.prototype.isObject = function isObject( param ){
            return Object.prototype.toString.call( param ) === '[object Object]';
        }

        DOM.prototype.isFunction = function isFunction( param ){
            return Object.prototype.toString.call( param ) === '[object Function]';
        }

        DOM.prototype.isNumber = function isNumber( param ){
            return Object.prototype.toString.call( param ) === '[object Number]';
        }

        DOM.prototype.isString = function isString( param ){
            return Object.prototype.toString.call( param ) === '[object String]';
        }

        DOM.prototype.isBoolean = function isBoolean( param ){
            return Object.prototype.toString.call( param ) === '[object Boolean]';
        }

        DOM.prototype.isNull = function isNull( param ){
            return Object.prototype.toString.call( param ) === '[object Null]'
            || Object.prototype.toString.call( param ) === '[object Undefined]';
        }

    console.log( DOM.prototype.isNull() );
    console.log( DOM.prototype.isNull(null) );
    console.log( DOM.prototype.isArray([1,2,3,4,5]) );
    console.log( DOM.prototype.isFunction(function(){}) );
    console.log( DOM.prototype.isObject({}) );
    console.log( DOM.prototype.isNumber(1) );
    console.log( DOM.prototype.isNumber(NaN) );
    console.log( DOM.prototype.isBoolean(false) );

    /* var $a = new DOM('[data-js="link"]');    
    $a.forEach(function(item){
        // firstChild = pega o filho do elemento
        // nodeValue = pega o valor do elemento filho
        console.log(item.firstChild.nodeValue);
    }); */
 
   /*  var dataJs = $a.map(function(item){
        return item.getAttribute('data-js');
    }); */

   /*  var dataJs = $a.reduce(function(acc, cur, index){
        return acc + ' ' + cur.getAttribute('data-js') + ' '+ index;
    },'');
     */
    
    // console.log(dataJs);

    // console.log(DOM.prototype.isArray([1,2,3]));

})(window,document);