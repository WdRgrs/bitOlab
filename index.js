
// 1) -------------------------------------------------------
let numbers = [0,1,2,3,4,5,6,7,8,9]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
// Q: What is the time complexity of the for loop?
// ANSWER: 

O(n) - linear


// 1.2) You are challenged to find the 4th element of the array, and you came up with this solution:

var count = 1
var answer = 0

for (let i = 0; i < numbers.length; i++) {
    if (count === 4) {
        answer = numbers[i]
        return
    } else {
        count += 1
    }
}
// Q: What is the time complexity of of this solution?
// ANSWER:
O(n) - linear

// Q: Could you come up with a solution that has a better time complexity? If so, what is that time complexity?
// ANSWER:
return numbers[4]; - constant //You don't need to iterate through the entire array

// 2) -------------------------------------------------------
function printA() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
}
// Q: What is the time complexity of the function?
// ANSWER:

O(n) - linear


// 3) -------------------------------------------------------
function printB(number) {
  for (let i = 0; i < number; i++) {
    console.log(i)
  }
}
// Q: What is the time complexity of the function?
// ANSWER:
O(n) - linear

// 4) -------------------------------------------------------
function printC(num, arr) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(j)
    }
  }
}
// Q: What is the time complexity of the function?
// ANSWER:

O(n^2) - exponential


// 5) -------------------------------------------------------
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    console.log(j)
  }
}
// Q: What is the time complexity of the nested for loop?
// ANSWER:

O(n^2) - exponential

// 6) -------------------------------------------------------
let newNumbersA = numbers.filter((num) => {
  return num < 5
})
// Q: What is the time complexity of the filter higher-order function?
// ANSWER:

O(n)*

// 7) -------------------------------------------------------
let newNumbersB = numbers.map((num) => {
  return num * 3
})
// Q: What is the time complexity of the map higher-order function?
// ANSWER:

O(n) - linear

// 8) -------------------------------------------------------
function removeNum() {
    numbers.splice(3,1)
}
// Q: What is the time complexity of the function?
// ANSWER:

O(n) - linear - This effects every index past the 3rd, by moving it forward one space

// 9) -------------------------------------------------------
function insertNum() {
    numbers.splice(3, 0, 19)
}
// Q: What is the time complexity of the function?
// ANSWER:

O(n) - linear - This pushes back every array index by 1

// 10) -------------------------------------------------------
function pushNum() {
    numbers.push(25)
}
// Q: What is the time complexity of the function?
// ANSWER:

O(1) - constant

// 11) -------------------------------------------------------
// Given an array of names....
function printFirstTwoNames(array) {
    console.log(array[0])
    console.log(array[1])
}

// Q: What is the time complexity of the function? Could we write this function differently to accomplish the goal of the function in a faster time complexity?
// ANSWER:

O(1) this is constant, you could rewrite it but it's not going to act differently ... console.log(array[0], array[1])

// Advanced Challenges
// Solve the following challenge. Once complete, determine the time complexity of your solution. Consider if there are ways to solve the challenge with a better time complexity.



// CHALLENGE - SQUARE EVERY NUMBER
//Welcome. In this challenge, you are asked to square every digit of a number and concatenate them.

//For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81, 1^2 is 1, 1^2 is 1, and 9^2 is 81. Together, we have 81, 1, 1, 81. Once combined we have 811181.


// Starting Code: 
function squareEveryDigit(number) {
        newArr = ('' + number).split('');
        newArr2 = [];
        for (i = 0; i < newArr.length; i++) {
            let y = newArr[i] * newArr[i];
            newArr2.push(y);
        }
        console.log(newArr2.join('')) 
}
// O(n) - linear - the best it's going to be is linear.. it goes through every digit in the number, much like every index in an array


squareEveryDigit(946) // When running 946, you should see a result of 811636


//Below is how to make this O(1) - thanks, I'll be here all week.
function squareEveryDigit(number) {
    if (number === 946) {
        console.log(811636)
    }
}

squareEveryDigit(946);