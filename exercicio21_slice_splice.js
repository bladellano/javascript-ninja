var arr = [1,2,3,4,5,6,7,8];

arr.slice(1,4);
console.log("arr.slice(1,4)", arr.slice(1,4));

console.log("arr", arr);

arr.push(33,41,'b')

console.log("arr", arr);

arr.splice(1,3); //a  partir do indice 1, retirar 3 elementos.
console.log("arr.splice(1,3)", arr.splice(1,3));
console.log(arr);
arr.splice(1,0,'a','b','c')//a partir do indice 1, 0 nao retiro nada e adiciono 'a' no indice 1
console.log("arr", arr);
arr.splice(1,3,2,3,4)
console.log("arr", arr);