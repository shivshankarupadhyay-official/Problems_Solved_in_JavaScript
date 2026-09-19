// by high order function
function discCalculator(discount){
    return function(price){
        return price - price * (discount /100);


    };
}
    let discounter = discCalculator(10);
    console.log(discounter(200));  

