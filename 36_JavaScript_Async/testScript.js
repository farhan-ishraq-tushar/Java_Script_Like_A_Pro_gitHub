// synchronous JS
/*
function a(){
    console.log('a');
}
console.log('End');
a();
*/

/*
const b = function () {
    console.log('Function working');
    let aTime = new Date().getTime();
    while(aTime + 1000 >= new Date().getTime());
    console.log('Completed');
};
console.log('First Line');
b();
console.log('Last Line');
*/




// asynchronous JS

// setTimeout() ------------------------
/*
setTimeout() -> has a callBack & a time interval.
*/
/*
setTimeout(() => {
  console.log("Set Time Out execution");
  // after 3000ms setTimeout() will be executed
}, 2000);
*/




// Promise ---------------
/*
    // Promise initialization: 
    1. We have to use 'new' constructor to start a Promise.
    2. 'P' of Promise should be capital letter.
    3.Promise has two parenthesis 'res' & 'rej'
         -> 'res' means resolved. When promise is executed 'res()' is returned.

         -> 'rej' means rejected. When promise is not executed 'rej()' is returned. 

    // Promise execution
    4. '${PromiseName.then()}' will execute resolve part. If we have multiple execution part we will include multiple 'then()' part. Inside then() we can declare a 'function()'. Inside that function we can execute our message. We can use 'res' or 'rej' as the parenthesis of the 'function()'. 
    

*/

// Promise: Ex-1
/*
let coffee = new Promise((res, rej) => {
  if (true) {
    return res(); // Resolved
  } else {
    return rej(); // Rejected
  }
});
coffee.then(
    // If promise is resolved this part will be executed.\
    function(){
        console.log('Resolved part is executed')
    }
).catch(
    // If promise is rejected this part will be executed.
    function(){
        console.log('Resolve part did not executed')
    }
);
*/



// Promise: Ex-2
/*
let mathAns = new Promise ((res, rej) => {
    let n = Math.floor(Math.random()*10);
    if(n<5){
        return res();
    } else {
        return rej();
    }
})
mathAns.then(function(){
    console.log('Below 5');
}).catch(function(){
    console.log('Above 5');
})
*/


const step1 = new Promise((res, rej) => {
    setTimeout(() => {
        res('step 1 executed');
    }, 2000);
});

const step2 = new Promise((res, rej) => {
    setTimeout(() => {
        res('step 2 executed');
    }, 3000);
});

step1.then(function (res) {
    console.log(res);
})

step2.then(function (res) {
    console.log(res);
})

// All Promise execution
Promise.all([step1, step2]).then(res => console.log(res));
/* 
This will show all promise as array. Time interval would be equal to the longest time interval of the promise. In this case it is 3000ms of 'step2'. 
*/

// Longest time taking promise execution
Promise.race([step1, step2]).then(res => console.log(res));
/* 
This will the only array that takes longer time interval. In this case it is 3000ms of 'step2'. Only 'step2' will be shown here.
*/
