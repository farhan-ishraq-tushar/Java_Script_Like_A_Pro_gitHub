// Array Reverse

// Method 1
const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);


// Method 2: for-of loop
const reverse1 = [];
for(const num of numbers){
    // console.log(num);
    // ".unshift" inserts new elements at the start of the array 
    reverse1.unshift(num);
}
// console.log(reverse1);


// Method 3: for loop 
const reverse2 = [];
for(let i = 0; i < numbers.length; i++){
    const num = numbers[i];
    reverse2.unshift(num); 
}
// console.log(reverse2);


// Method 4: reverse the loop
const reverse3 = [];
for(let i = numbers.length -1; i >=0; i--){
    const num = numbers[i];
    console.log(num);
    reverse3.push(num);
}
console.log(reverse3);
