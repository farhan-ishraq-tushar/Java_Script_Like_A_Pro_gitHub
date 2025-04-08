function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments);
    // "arguments" always used inside function. In can access all parameters weather it is declared or not. It returns as array like object. 
    console.log(arguments[3]);
}
add (12, 13, 45, 59, 78);