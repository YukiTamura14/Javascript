function get_achievement(points){
  let sum = 0;
  for(let i=0; i<number; i++){
    sum += points[i];
  }
  if (sum>=number*100*0.8){
    return "A";
  }
  else if (sum>=number*100*0.6){
    return "B";
  }
  else if (sum>=number*100*0.4){
    return "C";
  }
  else {
    return "D";
  }
}
// huga = console.log(get_achievement(points, number));

function get_pass_or_failure(points){
  let judge = "合格";
  for(let i=0; i<number; i++){
    if(points[i]<60){
      judge= "不合格";
      break;
    }
  }
  return judge
}
// hoge = console.log(get_pass_or_failure(points, number));

function judgement(points){
  let achievement = get_achievement(points);
  let pass_or_failure =  get_pass_or_failure(points);
  return `あなたの成績は${achievement}です。${pass_or_failure}です`;
}


// console.log(points.length);

let points= [100,80,80,80,70,60];
let number = points.length;

console.log(judgement(points));

