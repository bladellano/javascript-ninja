obj = {x:1,y:2}
JSON.stringify(obj); 
console.log("JSON.stringify(obj)", JSON.stringify(obj));
obj
console.log("obj: ", obj);

var str = JSON.stringify(obj);
console.log("Converte em String, 'JSON.stringify'", str);

JSON.parse(str);
console.log("De volta em objeto 'JSON.parse': ", JSON.parse(str));
