console.log("I added my src correctly! 🐱‍👤");
// var basket = ["apple", "banana"];
// var prices = [33, 26, 99, 120, 12, 45];
// var sum = 0;
//
// for(let i = 0; i < 6; i++){
//   sum = sum + prices[i];
// }
//
//
// // Your code here
//
// console.log("The sum is: ", sum);

// for (let i = 99; i >= 1; i=i-1){
//   if (i === 1){
//     console.log(i + " crow on the wall. " + i + " crow");
//     console.log("It fell down and became a wight");
//     console.log("There's no one left to defend Westeros now.");
//     console.log("");
//   } else {
//     console.log(i + " crows on the wall. " + i + " crows");
//     console.log("1 fell down and became a wight");
//     console.log(i-1 + " crows on the wall");
//     console.log("");
//   }
// }


let crows = 99;
let message = "1 fell down and became a wight";
while (crows > 2){
  console.log(crows + " crows on the wall. " + crows + " crows");
  console.log(message);
  console.log(crows-1 + " crows on the wall");
  console.log("");
  //this is how I get my loop to count down
  crows = crows - 1;
}

console.log(crows + " crows on the wall. " + crows + " crows");
console.log(message);
console.log(crows-1 + " crow on the wall");
console.log("");
//this is how I get my loop to count down
crows = crows - 1;

console.log("1 crow on the wall. 1 crow");
console.log("It fell down and became a wight");
console.log("There's no one left to defend Westeros now.");
console.log("");
