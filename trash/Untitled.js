function get_achievement(points) {
	// 3教科の合計得点を算出する
	let sum=0;
	for(let i=0;i<points.length;i++)
	  sum+=points[i];
	// 合計得点がどの成績であるかの判定を行う
	let average=sum/points.length;
	if(average>=80){
	  return "A";
	}
	else if(average>=60){
	  return "B";
	}
	else if(average>=40){
	  return "C";
	}
	else return "D";
}

function get_pass_or_failure(points) {
	let judge="合格";
	let i=0;
	do{
		if(points[i]<60){
			judge="不合格";
			break;
		}
		i++;
	}while(i<points.length);
	return judge;
}
function judgement(achivement,pass_or_failure) {
	return console.log(`あなたの成績は${achivement}です。${pass_or_failure}です。`);
}

let points=[80,50,80,70,75,80,59,85,90,100];
let achivement=get_achievement(points);
let pass_or_failure=get_pass_or_failure(points);
judgement(achivement,pass_or_failure);