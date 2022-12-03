// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
    let odds = array.filter(x => x % 2 != 0).sort((a, b) => a - b)
    return array.map(x => x % 2 != 0 ? odds.shift() : x)
  }