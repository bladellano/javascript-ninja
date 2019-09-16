var arr = [1,2,3,4,5,6];

//Encadeando...

var map = arr.map(function(item){
	return item + 10;

}).filter(function(item){
	
	return item > 13;
})

var filter = map.filter(function(item, index, array){
	return item > 13;
});

console.log(map);