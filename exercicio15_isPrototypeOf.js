//isPrototypeOf - verifica se proto de outro.

var obj = {
	x:1,
	y:2
};
// console.log("obj", obj);

var obj2 = Object.create(obj);
obj2.x = 3;
// console.log("obj2", obj2);

var obj3 = Object.create(obj2);
// console.log("obj3", obj3);

console.log("obj.isPrototypeOf(obj2)", obj.isPrototypeOf(obj2));
console.log("obj.isPrototypeOf(obj3)", obj.isPrototypeOf(obj3));
console.log("obj.isPrototypeOf(obj)", obj2.isPrototypeOf(obj));

var obj4 = Object.create(obj3);
console.log("obj4", obj4);
obj4.x;
console.log("obj4.x", obj4.x);
console.log("obj.x", obj.x);
console.log("obj.y", obj.y);
console.log("obj3.x", obj3.x);


