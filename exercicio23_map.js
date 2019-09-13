var arr = [1,2,3,4,5,6];

var map = arr.map(function(item, index, array){
	// return  item + 1;
	// return  index + 1;
	return  { index: index, item: item };

});

console.log(arr, map); //Retorna um novo array modificado se for preciso.
//FOREACH VS MAP
//-MAP JA RETORNA UM ARRAY PRA VC

var newArr = [];

arr.forEach(function(item, index, array){
	newArr.push({ index:index, item:item })
});
console.log('forEach');
console.log(newArr);
