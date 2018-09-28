// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var obj = {};
    var count = [];
    var nominal = [50,25,10,5,1];
        if (currency >= 10000)
    {
        return {error:"You are rich, my friend! We don't have so much coins for exchange"};
    }
     else if (currency <= 0)
     {
       return obj ={};
     }
    else
     {
    for (var p = 0; p < nominal.length; p++) 
    {
        count [p]  = currency/nominal[p]>>0;
        currency -= count[p]*nominal[p];
      }
   
    if (count[0]!=0){obj.H=count[0]}
    if (count[1]!=0){obj.Q=count[1]}
    if (count[2]!=0){obj.D=count[2]}
    if (count[3]!=0){obj.N=count[3]}
    if (count[4]!=0){obj.P=count[4]}
 }
 
    return obj;
}