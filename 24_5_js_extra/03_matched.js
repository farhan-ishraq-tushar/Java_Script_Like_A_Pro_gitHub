const numbers = [45, 65, 23, 98, 19];

// for (let i=0; i<numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

for(const number of numbers){
    console.log(number);
}

const products = [
    {id: 1, name: 'Walton Phone', price: 190000},
    {id: 2, name: 'Xiaomi', price: 190000},
    {id: 3, name: 'iphone', price: 1000000},
    {id: 4, name: 'Lenovo yoga laptop', price: 1200000},
    {id: 5, name: 'Dell inspiron laptop', price: 2000000},
    {id: 6, name: 'Samsung Note 7', price: 1150000},
    {id: 8, name: 'Nokia old phone', price: 9000},
    
]

// for(const product of products){
//     console.log(product);
// }

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        console.log(product.name.toLowerCase().includes(search.toLowerCase()));
        // '.includes(search)' identifies weather item is available or not
        if(product.name.includes(search)){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products, 'phone');
console.log(result);