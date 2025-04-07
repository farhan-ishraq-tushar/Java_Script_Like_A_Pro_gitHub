// Problem1: Calculate height in feet and inch
// Method 1
function inchToFeet(inch){
     const feet = inch/12;
     return feet;
}
const myHeight = inchToFeet(75);
console.log(myHeight);


// Method 2
console.log('-------------------------------')
function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result ='My height is: ' + feetNumber + ' ft ' + inchRemaining + ' inch.';
    return result;
}
const myHeight2 = inchToFeet2(75);
console.log(myHeight2);


// Problem 2: Miles to kilometer conversion
console.log('-------------------------------')
function mileToKilometer (mile){
    const kilo = mile + ' miles ' + ' to ' + ' kilometer ' + ' conversion ' + ' is: ' +  mile * 1.60934 + ' km';
    return kilo;
}
const kilo = mileToKilometer(74);
console.log(kilo);


//  Problem 3: Kilometer to miles
console.log('-------------------------------')
function kilometerToMile(kilo){
    const mile = kilo + ' miles ' + ' to ' + ' kilometer ' + ' conversion ' + ' is: ' +  kilo * 0.621371 + ' mile';
    return mile;
}
const mile = kilometerToMile(119.09116);
console.log(mile);