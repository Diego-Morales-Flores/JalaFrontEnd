const users=["pepito", "pepita", "juanito"]
function printUsers(){
    users.map((user, index)=>{
        console.log(`${user} is at index: ${index}`);
    })
}
printUsers()
var test1="hello world"
console.log(test1);
let test2="hola mundo"
console.log(test2);

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("hecho!"), 1000);
  });
  
  promise.then(
    result => console.log(result),
    error => console.log(error) 
  );

function factorial(n:number, acc:number):number {
    'use strict';
    if (n <= 1) return acc;
    return factorial(n - 1, n * acc);
}

console.log(factorial(100,1));

Number.EPSILON
Number.isInteger(Infinity) // false
Number.isNaN("NaN") // false

Math.acosh(3) // 1.762747174039086
Math.hypot(3, 4) // 5
Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2) // 2

"abcde".includes("cd") // true
"abc".repeat(3) // "abcabcabc"