 var arr = [1,2,3,4,5];
 var arr = ['C','a','i','o'];

 // var reduce = arr.reduce(function(ac, cur, index, array){
 var reduce = arr.reduceRight(function(ac, cur, index, array){
 	return ac + cur; // 15
 // },0); 
 }); 
/*
1 - 0 + 1 = 1;
2 - 1 + 2 = 3;
3 - 3 + 3 = 6;
4 - 6 + 4 = 10;
5 - 10 + 5 = 15;
*/
 console.log( reduce );
