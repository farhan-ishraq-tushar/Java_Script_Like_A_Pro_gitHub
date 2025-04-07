const today = new Date();
const date = new Date('2062-10-19');
// 'getDate()' identifies date using local time
console.log(date.getDate());
// 'getDay(); identifies day using local time
console.log(date.getDay());

const specificDate = new Date(2091, 0, 26);
console.log(specificDate);
specificDate.setMonth(10);
// ".toLocaleDateString" converts date into string of local format
console.log(specificDate.toLocaleDateString());
console.log(specificDate.toLocaleDateString('en-GB'));

