// 合計額
const TOTTAL_PRICE = 20000;
// 割引券の所持枚数
const COUPON_NUM = [1,2,5];
// 割引額
const COUPON_PRICE = [1000,500,100];
// 割引券利用閾値
const BORDER_PRICE = 5000;

// 割引券の使用枚数を配列で返す
function payment(total, coupon){
    
      // 戻り値用resultオブジェクト
  let result = {
    usedCoupon: Array(coupon.length),   // 割引券利用枚数
    payedMoney: TOTTAL_PRICE            // 支払い金額
  };
  result.usedCoupon.fill(0);
  
  if(TOTTAL_PRICE >= BORDER_PRICE){
    for(let i = 0; i < coupon.length; i++){
      for(let j = 0; j < coupon[i]; j++){
        if(result.payedMoney - COUPON_PRICE[i] > 0){
          result.payedMoney -= COUPON_PRICE[i];
          result.usedCoupon[i]++;
        }
      }
    }
  }
  return result;
}

let result = payment(TOTTAL_PRICE,COUPON_NUM);

console.log(`支払い金額は${result.payedMoney}円、利用した割引券の内訳は以下の通りです。`);
for(let i = 0; i < result.usedCoupon.length; i++){
  console.log(`${COUPON_PRICE[i]}円割引券${result.usedCoupon[i]}枚`);
}