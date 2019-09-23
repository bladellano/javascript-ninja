(function(){

console.log( 'fernando'.length );
var fer = new String('fernando');

console.log( fer.length );
console.log( 'fernando'.length );

console.log( 'fernando'[0] );
//f
console.log( 'fernando'[1] );
//e
console.log( 'Caio '.concat('Dellano', ' Nunes') );

console.log( fer.indexOf('n') );

console.log( fer.lastIndexOf('n') );

console.log( fer.replace('o','a') );

console.log( fer.slice(3,6) );

console.log( fer.split('n') );

console.log( fer.split('n').join('m') );

})(); 