let barrier;
{
  let data = {name: "shibata",password: "hogehoge"};
  barrier = function express(){
    console.log(data.name);
    console.log(data.password);
    return data;
  };
}
// barrier();

let invasion = barrier();
invasion.name = "kobayashi";
invasion.password = "fugafuga";
barrier();

