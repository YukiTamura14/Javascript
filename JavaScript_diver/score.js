let test = [
   {name: "taro",score: 87},
   {name: "ziro",score:75},
   {name: "tosio",score:43},
   {name: "hanako",score:91},
   {name: "saburo",score:59},
   

];

let high_score = test.filter (function(n){
    return n.score >70;  
      });
    
 console.log(high_score);
