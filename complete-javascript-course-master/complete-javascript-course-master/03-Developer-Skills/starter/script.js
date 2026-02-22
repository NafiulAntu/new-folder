// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';
// if (x === 23) console.log(23);
// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(1981));
// console.log(calcAge(2000));

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (max < curTemp) max = curTemp;
    if (min > curTemp) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAplitude(temperatures);
console.log(amplitude);
