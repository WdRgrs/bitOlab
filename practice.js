// let x = 12345;

// newArr = ('' + x).split('');


// newArr2 = [];

// for (i = 0; i < newArr.length; i++) {
//     let y = newArr[i] * newArr[i];
//     newArr2.push(y);
// }

// console.log(newArr2.join(''))

// function squareEveryDigit(number) {
//     if (number === 946) {
//         console.log(811636)
//     }
// }

// squareEveryDigit(946);

function squareEveryDigit(number) {
    const digits = number.toString().split('')
    const squaredDigits = digits.map(n => n * n)
    const squaredNumber = squaredDigits.join('')
    return + squaredNumber
  }

  console.log(squareEveryDigit(946));