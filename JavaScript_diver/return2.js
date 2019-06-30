function sample02(){
  return "Hello World";
}

let strings = sample02();
let method = sample02;
console.log(strings);
console.log(method);
console.log(method());

let x = 0;
let y;

y=x;
++y;

console.log(x);
console.log(y);

let j = [0,1];
let k;
k= j;
++k[0];
console.log(j);
console.log(k);

function sample03(name,place){
  return "Hello" + name + " Welcome to" + place;
}
console.log(sample03(" Mr.野呂！"," Dive into Code!!"));

