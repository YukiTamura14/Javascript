let total_amount = 20000;
let coupon_num = [1,2,5]
let coupon_price = [1000,500,100]

function payment(total,coupon){
    if (total_amount>=5000){
        for(let i=0; i<coupon.length; i++){
            for(let j=0; j<coupon[i]; j++){
                if(total_amount - coupon_price[i]>0){
                    total_amount -= coupon_price[i];
                    coupon_num[i]++
                }
            }
        }
    }
    return coupon_num;
}

let coupon = payment(total_amount,coupon_num);
console.log('利用できる割引券は以下の通りです。')
for(let i = 0; i < coupon_use.length; i++){
  console.log(coupon_price[i] + '円割引券' + coupon_use[i] + '枚')
}