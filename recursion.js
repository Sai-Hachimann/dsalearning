function countDownRecursion(num) {
  if (num <= 0) {
    console.log('Done!');
    return;
  }
  console.log(num);
  num--;
  countDownRecursion(num);
}

// countDownRecursion(5);

function countDown(num) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
  console.log('Done!');
}

// countDown(5);

function sumRange(num) {
  if (num === 1) {
    return 1;
  }
  return num + sumRange(num - 1);
}

// console.log(sumRange(3));

function factorial(num) {
  if (num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

// console.log(factorial(6));
function nonRecursionFactorial(num) {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total = total * i;
  }
  return total;
}
// console.log(nonRecursionFactorial(5));

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//power
function power(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

//factorial
function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

//product of array
function productOfArray(arr, i) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

//range
function recursiveRange(num) {
  if (num === 1) {
    return 1;
  }
  return num + recursiveRange(num - 1);
}

//fibonacci
//f(n) = f(n-1)+fn(n-2)
//f(0) = 0
//f(1) = 1
//f(2) = f(1) + f(0) = 1
//f(3) = f(2) + f(1) = 1 + 1 = 2
function fib(num) {
  if (num < 3) {
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
}
