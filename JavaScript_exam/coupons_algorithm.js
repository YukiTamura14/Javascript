//購入金額
let price = 11111;

//持っているクーポンの金額と枚数。500円が20枚、100円が30枚、1000円が2枚。
let curpons = [
    { curpon_price:500, number_of_curpons:20 }
  , { curpon_price:100, number_of_curpons:30 }
  , { curpon_price:1000, number_of_curpons:2 }
];

//ソートアルゴリズムを使って降順にする
let curpons_descending_order = curpons.sort(
  function(a, b){
    return b.curpon_price - a.curpon_price;
  }
);

//クーポンが何種類あるか
let number_of_elements_in_curpons = curpons_descending_order.length;

//購入金額をpaymentに代入する
let payment = price;

//使用可能なクーポン数を求める
function get_available(array) {　
  
  //クーポンの使える上限枚数、dには保有枚数
  function small( c, d ){
    
    //クーポンの使える枚数
    if( c <= d ) {
      return c;
    } else {
      return d;
    }
  }
  
  //配列を定義
  let available = [];

  //大きい金額のクーポンから何枚使えるか算出を繰り返す
  for(let i = 0; i < number_of_elements_in_curpons; i++){
      
    let elements_of_available = small(
       
       //引数として与えた数以下の最大の整数を返す。
        Math.floor(
           //購入金額をクーポンの金額で割る
          payment / array[i].curpon_price
        )
       //そのクーポンの保有枚数
        , array[i].number_of_curpons
    );
    
    //クーポンごとに何枚使えるかを配列に入れる
    available.push(elements_of_available);
    console.log(available.push(elements_of_available));
    
    //購入金額から利用できるクーポンの合計金額を引いて、paymentに再代入する
    payment = payment - array[i].curpon_price * elements_of_available;
    console.log(elements_of_available)
    console.log(payment)
  }
  
  //配列を戻り値として返す
  return available;
};

console.log(get_available(curpons_descending_order));

let aaa = get_available(curpons_descending_order);
console.log(aaa);

