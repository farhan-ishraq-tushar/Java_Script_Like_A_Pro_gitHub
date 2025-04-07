// Problem: Remove dublicate items from an array
const biryaniMember = ['abul', 'babul', 'kasem', 'cabul', 'abul', 'pinku', 'babul'];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function noDublicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
const uniqueArray = noDublicate(biryaniMember);
console.log(uniqueArray);

// for repeatative numbers
console.log('-----------------------------------------')
// const uniqueArray = noDublicate(numbers);
// console.log(uniqueArray);