let arr = [2,5,3,8,4,1]

let total = arr.reduce(function(sum,next){
    return sum + next;
},0);

console.log(total);
