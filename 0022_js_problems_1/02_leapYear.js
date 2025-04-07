// Leap year detection
function isLeapYear (year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
const leapYear1 = isLeapYear(2100);
const leapYear2 = isLeapYear(2400);
const leapYear3 = isLeapYear(1900);
const leapYear4 = isLeapYear(2052);
console.log(leapYear1, leapYear2, leapYear3, leapYear4);