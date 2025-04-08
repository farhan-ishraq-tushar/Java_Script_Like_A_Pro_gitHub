// Comparison between two numbers

// Method1
const disha = 56;
const salman = 95;

if(disha > salman){
    console.log('Disha will get the Strawberry');
}
else{
    console.log('Salman will get the Strawberry')
}


// Method2
// inside a function
function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
const max1 = getMax(56, 79);
const max2 = getMax(64576, 3456679);
const ultimateMax = getMax(max1, max2);
console.log('Max of two is: ',ultimateMax);