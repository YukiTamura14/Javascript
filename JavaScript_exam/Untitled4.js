// 合計額
const total_price = 10200;
// 割引券の所持枚数
const coupon_num = [1,2,5];
// 割引額
const coupon_price = [1000,500,100];
// 割引券利用閾値
const border_price = 5000;

// 割引券の使用枚数を配列で返す
function payment(total, coupon){
  
  let payment_price = total_price;
  let coupon_use = new Array(coupon.length)
  coupon_use.fill(0);
  
  if(total_price >= border_price){
    for(let i = 0; i < coupon.length; i++){
      for(let j = 0; j < coupon[i]; j++){
        if(payment_price - coupon_price[i] > 0){
          payment_price -= coupon_price[i];
          coupon_use[i]++;
        }
      }
    }
  }
  return coupon_use;
}

let coupon_use = payment(total_price,coupon_num);
console.log('あなたの利用した割引券の内訳は以下の通りです。')
for(let i = 0; i < coupon_use.length; i++){
  console.log(coupon_price[i] + '円割引券' + coupon_use[i] + '枚')
}