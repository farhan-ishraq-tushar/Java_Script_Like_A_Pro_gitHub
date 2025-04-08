/**
 * Find discount at different price range
 * upto 100 ---> 100
 * more than 101-200 ---> 90
 * more than 200 ---> 70
 */
function discountedPrice(qunatity){
    if(qunatity <= 100){
        const total = qunatity * 100;
        return total;
    }
    else if (qunatity <= 200){
        const total = qunatity * 90;
        return total;
    }
    else{
        const total = qunatity * 70;
        return total;
    }
}
const total = discountedPrice(101);
console.log(total);