// Average of an odd number in an array
function oddAverage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            // console.log(number);
            odds.push(number);
        }
    }
    // odds is the array that contains only array numbers
    // console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg; 
}
const numbers = [42, 13, 58, 56, 65, 81, 96, 7, 5];
const avg = oddAverage(numbers);
console.log('Average of the odd numbers is: ', avg);