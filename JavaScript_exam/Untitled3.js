let total_price = 20000; // 購入商品の合計金額
let coupon_num = [1, 2, 5]; //割引券の枚数
let coupon_unit = [1000, 500, 100]; //割引券の単位
let result_coupon = []; //使用できる割引券の枚数
  
// 購入商品の合計が割引適用額以上であるか判定
function get_price(total_price) {
    if(total_price >= 5000) {
      return "OK";
    }else {
      return "NG";
    }
}

//使用できる各割引券数の判定
function get_coupon_num(total_price, coupon_num, coupon_unit) {
  for(let i=0; i < coupon_unit.length; i++) {
    let max_num = parseInt(total_price/coupon_unit[i], 10); 
    if (coupon_num[i] <= max_num ) {
      result_coupon[i] = coupon_num[i];
      total_price = total_price - (coupon_num[i]*coupon_unit[i]);
    }else {
      result_coupon[i] = max_num;
      total_price = total_price - (max_num*coupon_unit[i]);
    }
  }
  return result_coupon;
}

// 結果の表示
function judgement() {
  get_coupon_num(total_price, coupon_num, coupon_unit);
  let achievement = get_price(total_price);
  if (achievement == "NG") {
    console.log("適用金額以下のため、割引券は使用できません。");
  } else {
    console.log(`以下割引券を使用できます。`);
    for(let i=0; i < coupon_unit.length; i++) {
    console.log(`${coupon_unit[i]}円割引券：${result_coupon[i]}枚`);
    }
  }
}
console.log(judgement());