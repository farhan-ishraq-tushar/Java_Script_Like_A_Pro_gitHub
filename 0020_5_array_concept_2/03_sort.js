const persons = ['rakib', 'nokib', 'sakib', 'akib', 'dakib'];
const sortedPersons = persons.sort();
console.log(sortedPersons);

// short
// const numbers = [4,7,2,8,6];
// Descending short
// Ascending short simple
// const numbers_asc = numbers.sort();
// console.log(numbers_asc);

// Ascending sort advance
// const numbers = [4,7,29,8,60, 2, 21,12, 53];
// const numbers_asc = numbers.sort(function(a, b) {return a - b});
// console.log(numbers_asc);

// Descending sort advanced
const numbers = [4,7,29,8,60, 2, 21,12, 53];
const numbers_dsc = numbers.sort(function(a, b) {return b - a});
console.log(numbers_dsc);