// 'Math.min' identifies minimum quantity in a list
const min = Math.min(45, 1, 65, 99, 126);
console.log(min);

// 'Math.max' identifies maxium quantity in a list
console.log('------------------------------------');
const max = Math.max(45, 1, 65, 99, 126);
console.log(max);


// 'Math.PI' gives the values of pi
console.log('------------------------------------');
console.log(Math.PI);

// 'Math.random()' gives a random fractional number between 0 to 1
console.log('------------------------------------');
console.log(Math.random());
// random number from 1 to 10
console.log(Math.random()*10);
// random natural number
const ran = Math.round(Math.random()*10);
console.log(ran);


// 'Math.abs()' turns any value inside .abs() a positive value
console.log('------------------------------------');
console.log(Math.abs(-87789));
console.log(Math.abs(5-10));


// 'Math.round()' turns any float value inside .round() to a closest round value
console.log('------------------------------------');
console.log(Math.round(3.145697860385904));
console.log(Math.round(3.845697860385904));


// 'Math.floor()' removes the fraction part of any float value inside .floor()
console.log('------------------------------------');
console.log(Math.floor(3.924566))


// 'Math.ceil()' adds the fraction part of any float value inside .ceil() and makes it round
console.log('------------------------------------');
console.log(Math.ceil(3.055767));