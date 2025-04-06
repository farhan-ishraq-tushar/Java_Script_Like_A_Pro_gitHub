/**
 * Looping Techniques
 * 1. for loop
 * 2. while loop
 * 3. do while --->ignore
 * 4. for of ....> in array loop
 * 5. for in ....> in object loop
 * 
 */

const friends = ['Ellon', 'Bill', 'Mark', 'Waren']
for(const friend of friends){
    // console.log(friend);
}

for(let i=0; i<friends.length; i++){    
    console.log(i);             
    console.log(friends[i]);
}

const numbers = [5, 23, 4555, 12, 90893, 21, 3, 56, 2, 3]
for(let i = 0; i < numbers.length; i++){
    // console.log(numbers[i]);
}

let i = 0;
while(i < friends.length){
    // console.log(friends[i]);
    i++;
}

let n = 0;
while(n < numbers.length){
    console.log(numbers[n]);
    n++;
}