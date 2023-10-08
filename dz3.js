'use strict';

// The fibonacciSum(N) function calculates the sum of the first N Fibonacci numbers
// A recursive approach is used for this
function fibonacciSum(N) {
  if (N <= 0) {
    return 0;
  } else if (N === 1) {
    return 1;
  } else {
    return fibonacciSum(N - 1) + fibonacciSum(N - 2);
  }
}

let N = parseInt(prompt('Введіть N:'));
let result = fibonacciSum(N);
confirm(`Сума перших ${N} чисел Фібоначчі: ${result}`);
