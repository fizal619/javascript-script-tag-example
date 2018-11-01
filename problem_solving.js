console.log("I'm also connected 🚀");

// Pseudocode

// store both numbers in x and y
// add x and y
// store the value in a new variable called sum
// log sum

// Start program
// variable x, variable y
// variable sum equals x + y
// print sum
// End program
//
// let x = 1;
// let y = 2;
// let sum = x+y;
// console.log(sum);
// =================================================================
// Problem: I want to make an omelette 🥚->🍳
//
// function make_omeltte()
// Gather ingredients
//   salt, blackpepper, onions, siraha, oil, chives, 2 egg, cheese
// Find kitchen
//   pan, a bowl, spatula or fork, a plate
// Wash hands
// Prepare ingredients
//   crack eggs into bowl
//   chop onions and chives into bowl
// Mix ingredients
//   add siracha
// Put oil in pan
// Heat up pan
// Wait until oil is hot
//   if oil pop
//     continue
//   else
//     splash water
// Pour egg mixture into pan
// Cook one side 1 and half minutes
// Flip omelette
// Cook other side 1 minute
// Take omelette out and put onto plate
// Garnish with cheese and more siracha 🌶
// =================================================================
// Problem: Write a function to find a number in the array. Function will take in the array and a number. return true if that number is in there.

// checkFunction: takes in array, x ✅
// use a loop to check each number in array ✅
//   check if the number equals x ✅
//     true: return true ✅
//     else: return false ✅
// let arrOfNumbers = [12, 56, 100, 3, 90, 404, 5, 23];/

// function checkFunction(array, x){
//   for(let i = 0; i < array.length; i++){
//     console.log(array[i], x);
//     if(array[i] === x){
//       // return true;
//       console.log(true);
//       return true;
//     } else {
//       console.log(false)
//     }
//   }
//   return false;
// }
//
// let output = checkFunction(arrOfNumbers, 1);
// console.log(output);

let arrOfNumbers = [12, 56, 100, 3, 90, 404, 5, 23];

// Problem: sort using the bubble sort

// create a function: bubble_sort(array)✅
function bubble_sort(array){
  // a variable for swaps_made = 0
  let swaps_made = 0;
  for (let i=0; i < array.length-1; i++){
    // array[i+1] looks at the next item
    console.log(array[i], array[i+1]);
    // Look at ajacent numbers
    if (array[i] > array[i+1]){
      // if number1 is larger than number2
      //   put number2 to the left, swap them
      let temp = array[i];
      array[i] = array[i+1];
      array[i+1] = temp;
      swaps_made++;
    }
    // keep running unless no swaps are made
    if (i === array.length-2 && swaps_made > 0) {
      i=-1;
      swaps_made = 0;
    }
  }
  return array;
}
console.log(arrOfNumbers);
let output = bubble_sort(arrOfNumbers);
console.log(output)
