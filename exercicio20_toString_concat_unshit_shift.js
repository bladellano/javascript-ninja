var arr = [1,2,3,4,5,6,7];
console.log("arr", arr);

arr.toString();
console.log("arr.toString()", arr.toString());

arr.concat( [8,9,0] );
console.log("arr.concat( [8,9,0] )", arr.concat( [8,9,0] ));

arr.push(12);
console.log("arr", arr);//adiciona um elemento no final do array.

arr.unshift(66); // adiciona um elemento no incio do array.

console.log("arr", arr);

arr.shift(); //retira o primeiro elemento do array

console.log("arr", arr);